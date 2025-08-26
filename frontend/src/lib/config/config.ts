interface ButtonColorType {
    ordinary: string;
    warning: string;
    primaryAccent: string;
    success: string;
    error: string;
  }
  const buttonColors: ButtonColorType = {
    ordinary:
      " bg-dark-bg dark:bg-light-bg hover:bg-light-main-text/80 dark:hover:dark-main-text/5 text-light-bg dark:text-dark-bg",
    success: " bg-success text-light-bg hover:bg-success/90",
    warning: "",
    error: "",
    primaryAccent: "bg-light-primary-accent text-light-bg ",
  };

export const buttonClass = ( color: string) :string => { 
    return(
    ` text-[20px] font-medium rounded-[10px] px-[20px] h-[44px] ${color ==
  'primaryAccent'
    ? buttonColors.primaryAccent
    : color == 'error'
      ? buttonColors.error
      : color == 'success'
        ? buttonColors.success
        : color == 'warning'
          ? buttonColors.warning
          : buttonColors.ordinary} `
    )
}