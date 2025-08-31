interface ButtonColorType {
    ordinary: string;
    warning: string;
    primaryAccent: string;
    success: string;
    error: string;
    no_bg:string
  }
  const buttonColors: ButtonColorType = {
    ordinary:
      " bg-dark-bg dark:bg-light-bg hover:bg-dark-bg/80 dark:hover:bg-light-bg/80 text-light-bg dark:text-dark-bg",
    success: " bg-success text-light-bg hover:bg-success/90",
    warning: "",
    error: "bg-error text-light-bg hover:bg-success/90",
    primaryAccent: "bg-light-primary-accent text-light-bg ",
    no_bg:"text-light-main-text dark:text-dark-main-text",
  };

export const buttonClass = ( color: string) :string => { 
    return(
    ` text-[20px] font-medium rounded-[10px] px-[20px] h-[44px]
      disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed
    ${color=='no_bg'?buttonColors.no_bg:color ==
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