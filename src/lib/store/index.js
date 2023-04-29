import { writable } from "svelte/store";
import { getResponse } from "../openai";

export const messages = writable([]);
export let isLoading = writable(false);

export const sendMessage = async (inputMessage) => {
  if (inputMessage) {
    // messages.push({ type: "user", text: inputMessage });
    isLoading.update((currentIsLoading) => !currentIsLoading);
    messages.update((currentMessages) => [
      ...currentMessages,
      { type: "user", text: inputMessage },
    ]);
    const response = await getResponse(inputMessage);
    if (response) {
      // messages.push({ type: "bot", text: response });
      isLoading.update((currentIsLoading) => !currentIsLoading);
      messages.update((currentMessages) => [
        ...currentMessages,
        { type: "bot", text: response },
      ]);
    }
  }
};
