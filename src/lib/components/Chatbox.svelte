<script>
  // import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
  import DiAndroid from "svelte-icons/di/DiAndroid.svelte";

  import { messages, sendMessage } from "../store";
  let inputMessage = "";
</script>

<div class="flex flex-col h-full">
  <div class="flex-1 overflow-auto">
    {#each messages as message}
      <div
        class="chat chat-start {message.type == 'user'
          ? 'chat-start'
          : 'chat-end'}"
      >
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            {#if message.type == "user"}
              <img src="/cipher-health.jpeg" alt="user" />
            {:else}
              <DiAndroid />
            {/if}
          </div>
        </div>
        <div class="chat-bubble">
          {message.text}
        </div>
      </div>
    {/each}
  </div>
  <div class="mt-4">
    <input
      class="w-full p-2 rounded-lg"
      type="text"
      bind:value={inputMessage}
      on:keydown|preventDefault={(e) =>
        e.key === "Enter" && sendMessage(inputMessage)}
      placeholder="Type your message here..."
    />
  </div>
</div>
