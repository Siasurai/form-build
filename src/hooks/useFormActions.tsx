export const useFormActions = (
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleButtonClick = (action: string) => {
    switch (action) {
      case "save":
        setMessage("Form saved successfully!");
        break;
      case "cancel":
        setMessage("Form changes have been canceled.");
        break;
      case "submit":
        setMessage("Form submitted successfully!");
        break;
      case "reset":
        setMessage("Form has been reset.");
        break;
      case "clear":
        setMessage("Form fields have been cleared.");
        break;
      case "validate":
        setMessage("Form validation completed.");
        break;
      default:
        setMessage("Unknown action.");
        break;
    }
  };

  return { handleButtonClick };
};
