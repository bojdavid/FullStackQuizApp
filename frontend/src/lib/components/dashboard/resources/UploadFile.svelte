<script lang="ts">
  import { onMount } from "svelte";
  import { buttonClass } from "$lib/config/config";
  import { Upload, X, FileBadge } from "@lucide/svelte";
  import UploadedFiles from "./UploadedFiles.svelte";

  let fileInput = $state<HTMLInputElement>();
  const pick = () => {
    fileInput?.click();
  };

  // You'll also need to type these helper functions:
  function validFileType(file: File): boolean {
    const fileTypes: string[] = [
      "image/apng",
      "image/bmp",
      "image/gif",
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/svg+xml",
      "image/tiff",
      "image/webp",
      "image/x-icon",
      "application/pdf",
    ];

    return fileTypes.includes(file.type);
  }

  function returnFileSize(number: number): string {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
    return `${number} bytes`;
  }

  let file = $state<File>();
  let fileUrl: string = $state("");
  let isLoading: boolean = $state(false);
  let serverLoading: boolean = $state(true);
  const updateImage = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      isLoading = true;
      file = target.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === "string") {
          fileUrl = e.target.result;
          isLoading = false;
          console.log("File loaded, URL length:", fileUrl.length); // Debug
        }
      };

      reader.onerror = () => {
        console.error("Failed to read file");
        isLoading = false;
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    serverLoading = true;
    //simulate api call
    setTimeout(() => {
      serverLoading = false;
    }, 3000);
    console.log("file type -----", file?.type === "application/pdf");
  };
</script>

{#snippet fileDisplay(file: File, inContainer: boolean = false)}
  <div
    class="{inContainer ? '' : serverLoading ? 'grayscale opacity-50' : ''} "
  >
    {#if file.type.startsWith("image/")}
      <img
        src={fileUrl}
        alt="file upload"
        srcset=""
        class="{inContainer ? 'w-60 mx-auto' : 'w-20'} h-auto"
      />
    {:else if file.type === "application/pdf"}
      <FileBadge size={inContainer ? "30" : "100"} />
    {:else}
      <p>Invalid file type</p>
    {/if}
    <div class="{inContainer ? 'text-xs' : 'text-md'} text-left">
      <p class="max-w-[300px] text-wrap">
        File name - {file.name}
      </p>
      <p>
        File size - {returnFileSize(file.size)}.
      </p>
    </div>
  </div>
  {#if !inContainer}
    <p class=" {serverLoading ? 'text-warning' : 'hidden'}">Submit file</p>
  {/if}
{/snippet}

<section class="flex">
  <div class="flex-1">
    <form
      onsubmit={handleSubmit}
      method="post"
      enctype="multipart/form-data"
      class="flex flex-col gap-2 w-fit px-[25px] py-[9px] border-2 border-light-tetiary-accent border-dashed rounded-xl text-center bg-light-bg dark:bg-dark-bg"
    >
      <h2 class=" font-semibold">Upload File</h2>
      <p>Upload a note to g enerate questions</p>
      <div class="relative mx-auto">
        <!--
          Note: opacity is used to hide the file input instead of visibility: hidden or display: none, because assistive technology interprets the latter two styles to mean the file input isn't interactive.
        -->
        <label for="image_uploads" class="opacity-0 absolute">
          <input
            onchange={updateImage}
            bind:this={fileInput}
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept="image/jpeg,image/png,application/pdf"
            required
          />
        </label>
        <button
          type="button"
          onclick={pick}
          class="{buttonClass('success')} mx-auto"
        >
          Select file
        </button>
      </div>
      <div class="mx-auto text-light-tetiary-accent">
        {#if file}
          {#if isLoading}
            loading file
          {:else if file}
            {@render fileDisplay(file, true)}
          {:else}
            <p>no file has been uploaded</p>
          {/if}
        {:else}
          <Upload size="200" strokeWidth={0.8} />
        {/if}
      </div>
      <div class="preview__"></div>
      <div class="text-light-tetiary-accent">
        <button class={buttonClass("ordinary")} type="submit">Submit</button>
      </div>
    </form>
  </div>
  <div class="flex-1">
    <div>
      {#if isLoading}
        loading file
      {:else if file}
        {@render fileDisplay(file)}
      {:else}
        <p>no file has been uploaded</p>
      {/if}
    </div>
  </div>
</section>
<div class="mt-10">
  <UploadedFiles />
</div>
