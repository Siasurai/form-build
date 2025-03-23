export const applyJsonConfig = (
  tempConfig: string,
  setConfig: any,
  setMessage: any,
  setMessageClass: any
) => {
  try {
    JSON.parse(tempConfig);
    setConfig(tempConfig);
    setMessage(
      "JSON successfully applied! You can view the result in the 'Result' tab."
    );
    setMessageClass("message");
  } catch (error: any) {
    console.error("JSON parsing error:", error);
    setMessage(`Error: ${error.message}`);
    setMessageClass("message-error");
  }
};
