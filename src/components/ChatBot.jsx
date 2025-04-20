// const sendMessage = async () => {
//   if (!input.trim()) return;
//   const userMessage = { role: "user", content: input };
//   const newMessages = [...messages, userMessage];
//   setMessages(newMessages);
//   setInput("");
//   setLoading(true);

//   try {
//     const response = await fetch("http://localhost:8080/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ messages: newMessages }),
//     });

//     const data = await response.json();
//     setMessages([...newMessages, { role: "assistant", content: data.reply }]);
//   } catch (err) {
//     console.error(err);
//     alert("Failed to get response from AI.");
//   } finally {
//     setLoading(false);
//   }
// };
