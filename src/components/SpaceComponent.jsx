import React from 'react'

function SpaceComponent({data}) {

        const handleCopyClick = async () => {
            const textToCopy = "This text is copied to the clipboard!";
        
            try {
              await navigator.clipboard.writeText(textToCopy);
              toast("Text copied to clipboard!");
            } catch (err) {
              console.error("Failed to copy: ", err);
            }
          };

        const [objects, setObjects] = useState([]);

          // Fetch the list of objects when the component mounts
          useEffect(() => {
            fetch("/api/getallspaces")
              .then(response => response.json())
              .then(data => setObjects(data))
              .catch(error => console.error("Error fetching objects:", error));
          }, []);
        
        const deleteSpace = async(id) => {
            try {
                const response = await fetch(`/api/objects/${id}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    // Remove the object from the state after successful deletion
                    setObjects(objects.filter(object => object.id !== id));
                    toast("Object deleted successfully!");
                } else {
                    toast("Failed to delete object.");
                }
            } catch (error) {
                    console.error("Error deleting object:", error);
                    toast("An error occurred while deleting the object.");
            }
        }

  return (
    <li class="col-span-1 flex shadow-sm rounded-md border border-gray-200 dark:border-gray-600 hover:shadow-md">
    <img loading="lazy" class="bg-white object-contain inline-flex items-center justify-center w-20 h-20 rounded-l-md cursor-pointer " src={data.image}/>
    <div class="flex-1 flex items-center justify-between  bg-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-r-md border-l border-gray-200 dark:border-gray-800 ">
      <div class="flex-1 p-4 cursor-pointer ">
        <div class="text-gray-600 dark:text-gray-100 test-md text-2xl hover:text-gray-800 dark:hover:text-white">{data.spaceName}</div>
      </div>
      <div class="flex-shrink-0 pr-2">
        <div class="relative flex justify-end items-center">
          <div class="relative inline-block text-left">
            <div>
            <button class="group w-full flex items-center px-4 py-2 text-sm text-white hover:bg-red-500 hover:text-white" id="headlessui-menu-item-92" role="menuitem" tabindex="-1" onClick={handleCopyClick()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="mr-3 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path></svg>Get the link
              </button>
              <button class="group w-full flex items-center px-4 py-2 text-sm text-white hover:bg-red-500 hover:text-white" id="headlessui-menu-item-92" role="menuitem" tabindex="-1" onClick={deleteSpace(data._id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="mr-3 h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>Delete the space</button>
            </div></div></div></div></div></li>
  )
}

export default SpaceComponent