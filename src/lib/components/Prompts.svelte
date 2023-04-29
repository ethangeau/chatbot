<script>
  import { messages } from "../store";
  let isHistoryVisible = false;
  let searchQuery = "";
</script>

<div class="border-t-2 border-gray-300 mt-4 pt-4">
  <div class="flex justify-between items-center mb-2">
    <h2 class="text-lg font-bold">Prompts History</h2>
    <input
      class="rounded p-2"
      type="text"
      placeholder="Search"
      bind:value={searchQuery}
    />
    <button
      class="text text-blue-800"
      on:click={() => (isHistoryVisible = !isHistoryVisible)}
    >
      {isHistoryVisible ? "Hide" : "Show"}
    </button>
  </div>
  {#if isHistoryVisible}
    <ul class="h-[20vh] overflow-auto">
      {#each $messages.filter((m) => m.type === "user").reverse() as message}
        {#if message.text.toLowerCase().includes(searchQuery.toLowerCase())}
          <li class="text-gray-800">
            User: {message.text}
          </li>
        {/if}
      {/each}
    </ul>
  {/if}
</div>
