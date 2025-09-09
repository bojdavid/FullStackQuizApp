<script lang="ts">
  import { onMount } from "svelte";
  import { buttonClass } from "$lib/config/config";

  let fileInput = $state<HTMLInputElement>();
  const pick = () => {
    fileInput?.click();
  };

  let input: HTMLInputElement | null;
  let preview: HTMLDivElement | null;

  onMount(() => {
    input = document.querySelector("input");
    preview = document.querySelector(".preview");

    if (input) {
      input.addEventListener("change", updateImageDisplay);
    }
  });

  function updateImageDisplay() {
    if (!input || !preview) {
      console.error("Required elements not found");
      return;
    }
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }

    const curFiles = input.files;
    if (curFiles?.length === 0) {
      const para = document.createElement("p");
      para.textContent = "No files currently selected for upload";
      preview.appendChild(para);
    } else {
      const list = document.createElement("ol");
      preview.appendChild(list);

      if (curFiles) {
        for (const file of curFiles) {
          const listItem = document.createElement("li");
          const para = document.createElement("p");
          if (validFileType(file)) {
            para.textContent = `File name ${file.name}, file size ${returnFileSize(
              file.size
            )}.`;
            const image = document.createElement("img");
            image.src = URL.createObjectURL(file);
            image.alt = image.title = file.name;
            image.classList.add("h-[200px]", "w-auto");

            listItem.appendChild(image);
            listItem.appendChild(para);
          } else {
            para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
            listItem.appendChild(para);
          }

          list.appendChild(listItem);
        }
      }
    }
  }
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

  const upload = () => {
    if (input) {
      console.log(input.files);
    } else {
      console.log("input is null");
    }
  };
</script>

<form
  method="post"
  enctype="multipart/form-data"
  class="flex flex-col gap-2 max-w-[500px]"
>
  <h1 class="text-5xl">Upload File</h1>
  <div class="">
    <!--
      Note: opacity is used to hide the file input instead of visibility: hidden or display: none, because assistive technology interprets the latter two styles to mean the file input isn't interactive.
    -->
    <label for="image_uploads" class="opacity-0">
      <input
        onchange={updateImageDisplay}
        bind:this={fileInput}
        type="file"
        id="image_uploads"
        name="image_uploads"
        accept=".jpg, .jpeg, .png"
        multiple
      />
    </label>
    <button type="button" onclick={pick} class={buttonClass("success")}>
      Select file
    </button>
  </div>
  <div class="preview">
    <p>No files currently selected for upload</p>
  </div>
  <div class="">
    <button class={buttonClass}>Submit</button>
  </div>
</form>

<button class={buttonClass("warning")} onclick={() => upload()}>
  upload test
</button>
