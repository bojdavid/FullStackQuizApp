<script lang="ts">
  import {
    Upload,
    X,
    FileText,
    ImageIcon,
    FileBadge,
    CheckCircle2,
  } from "@lucide/svelte";
  import { buttonClass } from "$lib/config/config";
  import { fade, scale } from "svelte/transition";

  let fileInput = $state<HTMLInputElement>();
  let isDragging = $state(false);
  let file = $state<File | null>(null);
  let fileUrl = $state<string | null>(null);
  let uploadStatus = $state<"idle" | "uploading" | "success" | "error">("idle");

  const pick = () => fileInput?.click();

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    isDragging = true;
  };

  const handleDragLeave = () => {
    isDragging = false;
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    isDragging = false;
    const droppedFiles = e.dataTransfer?.files;
    if (droppedFiles && droppedFiles.length > 0) {
      processFile(droppedFiles[0]);
    }
  };

  const updateFile = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      processFile(target.files[0]);
    }
  };

  const processFile = (newFile: File) => {
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!validTypes.includes(newFile.type)) {
      alert("Please upload a valid image (JPEG, PNG) or a PDF.");
      return;
    }

    file = newFile;
    if (newFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        fileUrl = e.target?.result as string;
      };
      reader.readAsDataURL(newFile);
    } else {
      fileUrl = null;
    }
    uploadStatus = "idle";
  };

  const removeFile = () => {
    file = null;
    fileUrl = null;
    uploadStatus = "idle";
    if (fileInput) fileInput.value = "";
  };

  const handleSubmit = async () => {
    if (!file) return;
    uploadStatus = "uploading";

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    uploadStatus = "success";

    setTimeout(() => {
      removeFile();
    }, 2000);
  };

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
</script>

<div class="glass-card p-8 rounded-3xl max-w-2xl mx-auto w-full">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold text-gradient mb-2">Upload Resource</h2>
    <p class="text-muted-foreground">
      Upload a document, picture, or note to generate your quiz
    </p>
  </div>

  {#if uploadStatus === "success"}
    <div
      in:scale={{ duration: 300 }}
      class="flex flex-col items-center justify-center py-12 text-success"
    >
      <CheckCircle2 size={64} class="mb-4 animate-bounce" />
      <h3 class="text-2xl font-semibold">Upload Successful!</h3>
      <p class="text-muted-foreground">Your quiz is being generated...</p>
    </div>
  {:else}
    <div
      role="button"
      tabindex="0"
      class="relative group border-2 border-dashed rounded-2xl p-12 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer
        {isDragging
        ? 'border-primary bg-primary/5 scale-[1.02]'
        : 'border-border/50 hover:border-primary/50 hover:bg-muted/50'}"
      ondragover={handleDragOver}
      ondragleave={handleDragLeave}
      ondrop={handleDrop}
      onclick={pick}
      onkeydown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          pick();
        }
      }}
    >
      <input
        type="file"
        bind:this={fileInput}
        onchange={updateFile}
        accept="image/jpeg,image/png,application/pdf"
        class="hidden"
      />

      {#if file}
        <div class="w-full flex flex-col items-center" in:fade>
          <div
            class="relative w-32 h-32 rounded-xl overflow-hidden shadow-2xl mb-4 border border-border"
          >
            {#if file.type.startsWith("image/")}
              <img
                src={fileUrl}
                alt="Preview"
                class="w-full h-full object-cover"
              />
            {:else}
              <div
                class="w-full h-full bg-accent/20 flex items-center justify-center text-accent"
              >
                <FileText size={64} />
              </div>
            {/if}
            <button
              onclick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              class="absolute top-1 right-1 bg-destructive text-destructive-foreground p-1 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <X size={16} />
            </button>
          </div>
          <div class="text-center">
            <p class="font-medium text-foreground truncate max-w-xs">
              {file.name}
            </p>
            <p class="text-sm text-muted-foreground">
              {formatFileSize(file.size)}
            </p>
          </div>
        </div>
      {:else}
        <div
          class="p-6 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform duration-300"
        >
          <Upload size={48} />
        </div>
        <div class="text-center">
          <p class="text-lg font-medium text-foreground">
            Click or drag file to upload
          </p>
          <p class="text-sm text-muted-foreground mt-1">
            PDF, PNG, JPG (max 10MB)
          </p>
        </div>
      {/if}
    </div>

    <div class="mt-8 flex justify-end gap-3">
      <button
        onclick={removeFile}
        disabled={!file || uploadStatus === "uploading"}
        class="px-6 py-2 rounded-xl border border-border hover:bg-muted transition-colors disabled:opacity-50"
      >
        Clear
      </button>
      <button
        onclick={handleSubmit}
        disabled={!file || uploadStatus === "uploading"}
        class="{buttonClass(
          file ? 'primaryAccent' : 'ordinary',
        )} flex items-center gap-2"
      >
        {#if uploadStatus === "uploading"}
          <div
            class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
          ></div>
          Uploading...
        {:else}
          Generate Quiz
        {/if}
      </button>
    </div>
  {/if}
</div>

<style>
  /* Optional: Add custom animations or overrides if needed */
</style>
