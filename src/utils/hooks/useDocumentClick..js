import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    console.log("Using useDocumentClick Hook")
    const handleDocumentClick = (e) => {
      console.log("Document Clicked!");
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
}
