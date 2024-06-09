const classes = {
  card: {
    container:
      "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between",
    header: "flex items-center justify-between mb-4",
    title:
      "text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize",
    toggleContainer: "flex items-center space-x-2",
    toggleSwitchOn:
      "relative inline-block w-12 h-6 transition duration-200 ease-linear rounded-full bg-green-400",
    toggleSwitchOff:
      "relative inline-block w-12 h-6 transition duration-200 ease-linear rounded-full bg-gray-300",
    toggleLabelOn:
      "absolute left-0 w-6 h-6 bg-white border-2 rounded-full cursor-pointer transition transform duration-200 ease-linear translate-x-full border-green-400",
    toggleLabelOff:
      "absolute left-0 w-6 h-6 bg-white border-2 rounded-full cursor-pointer transition transform duration-200 ease-linear border-gray-300",
    toggleText: "text-gray-700 dark:text-gray-400",
    description: "mb-3 font-normal text-gray-700 dark:text-gray-400",
    footer: "flex justify-end",
    linkEnabled:
      "flex items-center text-blue-600 dark:text-blue-400 pointer-events-auto",
    linkDisabled: "flex items-center text-gray-400 pointer-events-none",
    arrowVisible: "ml-1 visible",
    arrowInvisible: "ml-1 invisible",
  },
  modal: {
    overlay:
      "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",
    container: "bg-white shadow-lg max-sm:m-2 rounded-[10px] p-3 sm:w-[400px]",
    header: "flex justify-between items-center  space-y-2",
    title: "text-3xl font-medium",
    closeIcon: "cursor-pointer",
    body: "p-2 ",
    confirmationText: "text-sm py-3",
    footer: "flex justify-end p-3",
    cancelButton: "w-28 rounded-3xl bg-[#f1f1f1]",
    confirmButton: "w-28 rounded-3xl bg-gray-700 text-white text-xs py-6 mx-2",
  },
  toggle: {
    container: "flex justify-between items-center p-4",
    labelText: "text-lg",
    toggleWrapper: "flex items-center space-x-4",
    toggle: (isOn) =>
      `relative inline-block w-12 h-6 transition duration-200 ease-linear rounded-full ${
        isOn ? "bg-green-400" : "bg-gray-300"
      }`,
    toggleHandle: (isOn) =>
      `absolute left-0 w-6 h-6 bg-white border-2 rounded-full cursor-pointer transition transform duration-200 ease-linear ${
        isOn ? "translate-x-full border-green-400" : "border-gray-300"
      }`,
    input: "absolute opacity-0 w-0 h-0",
  },
  header: {
    header:
      "bg-[#F1F1F1] h-16 lg:h-12 z-20 border-b-[1px] border-[#C6C6C6] px-4 lg:px-0",
    container:
      "max-w-7xl mx-auto flex justify-between items-center h-full gap-10",
    logoLink: "flex items-center mx-4",
    logoImage: "mx-4",
    loginStatus: "mx-4",
    notificationIcon: "mx-2",
  },
  inputField: {
    input: "bg-[#fff] p-2 text-[14px] rounded-[10px] w-[150px]",
    select:
      "border border-gray-300 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:border-blue-500",
  },
};

export default classes;
