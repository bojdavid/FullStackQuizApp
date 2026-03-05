<script lang="ts">
  import { goto } from "$app/navigation";
  
  let isDragging = $state(false);
  let files = $state<FileList | null>(null);
  let textInput = $state("");
  let isGenerating = $state(false);
  let topic = $state("");

  function handleDragEnter(e: DragEvent) {
    e.preventDefault();
    isDragging = true;
  }

  function handleDragLeave(e: DragEvent) {
    e.preventDefault();
    isDragging = false;
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    isDragging = false;
    if (e.dataTransfer?.files) {
      files = e.dataTransfer.files;
    }
  }

  function handleFileInput(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      files = target.files;
    }
  }

  function generateQuiz() {
    if ((!files || files.length === 0) && !textInput) {
      alert("Please provide some notes or upload a file first.");
      return;
    }
    
    isGenerating = true;
    
    // Simulate AI Generation delay
    setTimeout(() => {
      isGenerating = false;
      // Navigate to the newly created quiz or the library
      goto("/dashboard");
    }, 3000);
  }
</script>

<div class="max-w-[800px] mx-auto min-h-[calc(100vh-100px)] py-12 px-4">
  <div class="mb-8">
    <a href="/dashboard" class="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit mb-6">
      <i class="fa-solid fa-arrow-left"></i> Back to Dashboard
    </a>
    <h1 class="text-3xl font-bold mb-2 flex items-center gap-3">
      <i class="fa-solid fa-wand-magic-sparkles text-primary"></i>
      Generate New Quiz
    </h1>
    <p class="text-muted-foreground">
      Provide your notes either by uploading a document or pasting text directly. Our AI will analyze the content and generate a tailored quiz.
    </p>
  </div>

  <div class="glass-card rounded-2xl p-8 mb-8">
    <div class="mb-6">
      <label for="topic" class="block text-sm font-medium mb-2">Quiz Topic (Optional)</label>
      <input 
        type="text" 
        id="topic"
        bind:value={topic}
        placeholder="e.g. History of the Roman Empire" 
        class="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
    </div>

    <!-- Drag and Drop Zone -->
    <div 
      class="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer bg-background/50 mb-6
             {isDragging ? 'border-primary bg-primary/5 shadow-[0_0_20px_rgba(var(--color-primary-500),0.2)]' : 'border-border hover:border-primary/50 hover:bg-muted/30'}"
      ondragenter={handleDragEnter}
      ondragleave={handleDragLeave}
      ondragover={(e) => e.preventDefault()}
      ondrop={handleDrop}
      onclick={() => document.getElementById('file-upload')?.click()}
      role="button"
      tabindex="0"
      onkeydown={(e) => e.key === 'Enter' && document.getElementById('file-upload')?.click()}
    >
      <input 
        type="file" 
        id="file-upload" 
        class="hidden" 
        accept=".txt,.pdf,.doc,.docx"
        multiple
        onchange={handleFileInput}
      />
      
      <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <i class="fa-solid fa-cloud-arrow-up text-2xl text-primary"></i>
      </div>
      
      {#if files && files.length > 0}
        <h4 class="text-lg font-bold text-success mb-1">{files.length} file(s) selected</h4>
        <p class="text-sm text-muted-foreground">{files[0].name} {files.length > 1 ? `+ ${files.length - 1} more` : ''}</p>
      {:else}
        <h4 class="text-lg font-bold mb-1">Click to upload or drag and drop</h4>
        <p class="text-sm text-muted-foreground">PDF, TXT, DOCX (Max. 10MB)</p>
      {/if}
    </div>

    <div class="flex items-center gap-4 mb-6">
      <div class="h-[1px] bg-border flex-1"></div>
      <span class="text-sm text-muted-foreground font-medium uppercase tracking-wider">OR PASTE TEXT</span>
      <div class="h-[1px] bg-border flex-1"></div>
    </div>

    <!-- Text Area -->
    <div class="mb-2">
      <textarea 
        bind:value={textInput}
        placeholder="Paste your notes, article, or content here..." 
        class="w-full bg-background border border-border rounded-lg p-4 min-h-[200px] resize-y focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      ></textarea>
    </div>
  </div>

  <div class="flex justify-end">
    <button 
      onclick={generateQuiz}
      disabled={isGenerating || ((!files || files.length === 0) && !textInput)}
      class="bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center gap-3 relative overflow-hidden group"
    >
      {#if isGenerating}
        <i class="fa-solid fa-circle-notch fa-spin"></i>
        Analyzing Notes...
      {:else}
        <i class="fa-solid fa-bolt group-hover:scale-110 transition-transform"></i>
        Generate AI Quiz
      {/if}
    </button>
  </div>
</div>
