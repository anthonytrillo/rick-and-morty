import { toast, ToastOptions, ToastPosition } from "react-toastify";
import { useCallback, useMemo } from "react";
import "react-toastify/ReactToastify.css"

export const useToast = () => {
  const defaultOptions: ToastOptions = useMemo(
    () => ({
      position: "bottom-center" as ToastPosition,
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    }),
    []
  );

  const notify = useCallback(
    (type: "success" | "error" | "info", message: string) => {
      toast[type](message, defaultOptions);
    },
    [defaultOptions]
  );

  return {
    notifySuccess: useCallback((message: string) => notify("success", message), [notify]),
    notifyError: useCallback((message: string) => notify("error", message), [notify]),
    notifyInfo: useCallback((message: string) => notify("info", message), [notify]),
  };
};