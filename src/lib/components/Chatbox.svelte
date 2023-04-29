<script>
  // import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
  import DiAndroid from "svelte-icons/di/DiAndroid.svelte";

  import { messages, sendMessage } from "../store";
  let inputMessage = "";
  let isLoading = false;

  function scrollToBottom(node) {
    const config = { childList: true, subtree: true };

    const observer = new MutationObserver(() => {
      node.scrollTop = node.scrollHeight;
    });

    observer.observe(node, config);

    return {
      destroy() {
        observer.disconnect();
      },
    };
  }
</script>

<div class="flex flex-col h-full">
  <div class="flex-1 overflow-auto" use:scrollToBottom>
    {#each $messages as message}
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
      on:keydown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          // console.log(inputMessage);
          sendMessage(inputMessage);
          inputMessage = "";
        }
      }}
      placeholder="Type your message here..."
    />
  </div>
</div>
