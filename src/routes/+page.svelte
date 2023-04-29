<script>
  import Chatbox from "../lib/components/Chatbox.svelte";
  import Prompts from "../lib/components/Prompts.svelte";
</script>

<div class="h-screen bg-gray-100">
  <div class="h-screen flex items-center justify-center">
    <div class="h-[60vh] w-full max-w-lg p-4 bg-white rounded shadow">
      <Chatbox />
      <Prompts />
    </div>
  </div>
</div>
