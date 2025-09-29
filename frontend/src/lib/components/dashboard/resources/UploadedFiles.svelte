<script lang="ts">
  import authImg from "$lib/assets/auth.jpeg";
  import profImg from "$lib/assets/profile.jpeg";
  import Button from "$lib/components/ui/button/button.svelte";
  import { FileBadge, Trash2 } from "@lucide/svelte";

  const tableData = [
    {
      img: authImg,
      name: "BOJ",
      type: "image",
      size: "3mb",
      quizData: [],
    },
    {
      img: profImg,
      name: "BOJ",
      type: "image",
      size: "3mb",
      quizData: [],
    },
    {
      img: "pdf",
      name: "BOJ",
      type: "pdf",
      size: "3mb",
      quizData: [],
    },
    {
      img: "pdf",
      name: "BOJ",
      type: "pdf",
      size: "3mb",
      quizData: [],
    },
  ];
</script>

<div class="overflow-x-auto">
  <table
    class="min-w-[500px] w-full max-w-[1200px] border border-gray-200 rounded-lg shadow-sm"
  >
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 text-left text-gray-700 font-medium">Image</th>
        <th class="px-4 py-2 text-left text-gray-700 font-medium">Name</th>
        <th class="px-4 py-2 text-left text-gray-700 font-medium">Doc/Type</th>
        <th class="px-4 py-2 text-left text-gray-700 font-medium">Size</th>
        <th class="px-4 py-2 text-left text-gray-700 font-medium">Take Quiz</th>
        <th class="px-4 py-2 text-left text-gray-700 font-medium">Delete</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      {#each tableData as data}
        <tr>
          <td class="px-4 py-2">
            {#if data.img == "pdf"}
              <FileBadge size={30} />
            {:else}
              <img
                src={data.img}
                alt="Item"
                class="w-12 h-12 rounded-md object-cover"
              />
            {/if}
          </td>
          <td class="px-4 py-2"> {data.name}</td>
          <td class="px-4 py-2">{data.type}</td>
          <td class="px-4 py-2">{data.size}</td>
          <td class="px-4 py-2">
            <button
              class="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Take Quiz
            </button>
          </td>
          <td class="px-4 py-2">
            <button
              class="px-3 py-1 text-error rounded-lg hover:text-error/80 transition"
            >
              <Trash2 size={30} />
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
