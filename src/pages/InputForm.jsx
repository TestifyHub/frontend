import React, { useEffect, useState } from "react";
import logo from '../../public/apple-touch-icon.png'


function InputForm() {
    return (
        <>
            <div id="root">
                <div className="flex flex-col min-h-screen overflow-y-scroll bg-gray-50">
                    <div className="fixed z-40 inset-0 overflow-y-scroll">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-dashboard">
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow shadow-xl sm:my-8 sm:align-top sm:max-w-6xl sm:w-full sm:p-6 z-50" aria-labelledby="modal-headline">
                                <div className="relative">
                                    <button className="text-gray-400 rounded-full w-6 h-6" style={{ position: "absolute", right: "5px", top: "5px", zIndex: 999, outline: 'none' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <div className="md:grid md:grid-cols-5 md:gap-6">
                                        <div className="md:col-span-2 py-6 md:py-12">
                                            <div className="flex flex-col rounded-lg border border-gray-200 false">
                                                <div className="flex flex-col ">
                                                    <main className="flex-grow">
                                                        <section className="relative">
                                                            <div className="absolute top-0 left-0 ml-6 -mt-4">
                                                                <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">Live preview - Testimonial page</div>
                                                            </div>
                                                            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                                                                <div className="py-12">
                                                                    <div className="max-w-3xl mx-auto text-center pb-6">
                                                                        <div className="relative inline-flex flex-col justify-center mb-4" style={{ maxWidth: '100px' }}>
                                                                            <img loading="lazy" className="rounded-md" src={logo} />
                                                                        </div>
                                                                        <h3 className="h3 mb-4 text-gray-600">Header goes here...</h3>
                                                                        <div className="custom-message text-base text-gray-500">
                                                                            <p>Your custom message goes here...</p>
                                                                        </div>
                                                                        <div className="w-full px-4 py-4 text-left mx-auto">
                                                                            <h3 className="text-lg leading-6 font-semibold text-gray-600 uppercase mb-2">questions</h3>
                                                                            <div className="w-10 mb-2 border-b-4" style={{ borderColor: "rgb(93, 93, 255)" }}></div>
                                                                            <ul className="mt-2 max-w-xl text-base list-disc pl-4 text-gray-500">
                                                                                <li>Who are you / what are you working on?</li>
                                                                                <li>What is the best thing about [our product / service]</li>
                                                                                <li>How has [our product / service] helped you?</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-6">
                                                                        <div className="max-w-xs mx-auto sm:max-w-none flex flex-col">
                                                                            <div>
                                                                                <button className="btn text-white text-sm mb-2 w-full px-4 py-2" style={{ backgroundColor: "rgb(93, 93, 255)" }}>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                                                                    </svg>Upload a video
                                                                                </button>
                                                                            </div>
                                                                            <div>
                                                                                <button className="btn text-white text-sm bg-gray-700 w-full px-4 py-2">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                                                    </svg>Send in text
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </main>
                                                </div>
                                            </div>
                                        </div>




                                        <div class="mt-5 md:mt-0 md:col-span-3">
                                            <section class="relative">
                                                <div class="w-full mx-auto px-4 sm:px-6 relative">
                                                    <div class="py-12">

                                                        <div class="flex text-sm">
                                                            <button class="py-2 grow flex justify-center border-gray-200 text-gray-700 text-white bg-purple-600 font-bold border rounded-tl-md rounded-bl-md" fdprocessedid="syvm">
                                                                <span class="flex space-x-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                                    <span>Basic</span>
                                                                </span>
                                                            </button>
                                                        </div>

                                                        <div class="flex justify-center">
                                                            <div class="w-1/3 border-t bg-gray-50 my-5">
                                                            </div>
                                                        </div>

                                                        <div class="w-full mx-auto text-center pb-12 text-gray-800">
                                                            <h3 class="h3 mb-4 aos-init aos-animate" data-aos="fade-up">Create a new Space</h3>
                                                            <p class="text-base w-full text-gray-600 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
                                                        </div>

                                                        <div class="max-w-xl mx-auto">


                                                            <div class="flex flex-wrap -mx-3 mb-4">
                                                                <div class="w-full px-3">
                                                                    <label class="block text-gray-700 text-sm font-medium mb-1" for="spaceName">Space name
                                                                        <span class="text-red-600">*</span>
                                                                    </label>
                                                                    <input id="name" type="text" class="form-input w-full text-gray-800 border-gray-300 rounded-md" placeholder="" required="" value="" fdprocessedid="u46lpb" />
                                                                    <span class="block text-gray-500 text-xs font-medium">Public URL is: testimonial.to/your-space</span>
                                                                </div>
                                                            </div>

                                                            <div class="flex flex-wrap -mx-3 mb-4">
                                                                <div class="w-full px-3">
                                                                    <label class="flex flex-row text-gray-700 text-sm font-medium mb-1" for="message">Space logo
                                                                        <span class="text-red-600">*</span>
                                                                        <div class="relative flex rounded-md items-start my-auto ml-2">
                                                                            <div class="flex items-center h-5 my-auto">
                                                                                <input id="squareLogo" name="squareLogo" type="checkbox" class="focus:ring-purple-500 h-4 w-4 text-purple-600 rounded cursor-pointer" checked="" />
                                                                            </div>
                                                                            <div class="ml-1 leading-5 my-auto">
                                                                                <label for="squareLogo" class="text-gray-600 text-sm">square?</label>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                    <div class="mt-2 flex items-center">
                                                                        <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"></span>
                                                                        <span class="ml-5 rounded-md shadow-sm">
                                                                            <input type="file" accept="image/*" name="newLogoURL" id="newLogoURL" class="newAvatarFile" />
                                                                            <label for="newLogoURL" class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer">Change
                                                                            </label>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div class="flex flex-wrap -mx-3 mb-4">
                                                                <div class="w-full px-3">
                                                                    <label class="block text-gray-700 text-sm font-medium mb-1" for="header">Header title
                                                                        <span class="text-red-600">*</span>
                                                                    </label>
                                                                    <input id="header" type="text" class="form-input w-full text-gray-800 border-gray-300 rounded-md" placeholder="Would you like to give a shoutout for xyz?" required="" value="" fdprocessedid="r34hu" />
                                                                </div>
                                                            </div>


                                                            <div class="flex flex-wrap -mx-3 mb-4">
                                                                <div class="w-full px-3">
                                                                    <label class="block text-gray-700 text-sm font-medium mb-1" for="message">Your custom message <span class="text-red-600">*</span></label>
                                                                    <textarea id="message" name="message" rows="4" placeholder="Write a warm message to your customers, and give them simple directions on how to make the best testimonial." class="flex-1 form-input block w-full min-w-0 rounded-md text-gray-800  transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300">
                                                                    </textarea>
                                                                    <span class="block text-gray-500 text-xs font-medium">Markdown supported</span>
                                                                </div>
                                                            </div>


                                                            <div class="flex flex-wrap -mx-3 mb-4">
                                                                <div class="w-full px-3">
                                                                    <label class="flex flex-row text-gray-700 text-sm font-medium mb-1" for="message">Questions
                                                                        <svg class="ml-2 my-auto flex-shrink-0 h-4 w-4 text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-tip="true" data-for="question-label" currentItem="false"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                    </label>
                                                                    <div>
                                                                        <div
                                                                            data-rbd-droppable-id="questions"
                                                                            data-rbd-droppable-context-id="0"
                                                                            style={{ backgroundColor: 'transparent', transition: 'background-color 0.2s' }}
                                                                        >
                                                                            <div data-rbd-draggable-context-id="0" data-rbd-draggable-id="0" class="mt-2">
                                                                                <div class="flex flex-row">
                                                                                    <div
                                                                                        tabIndex="0"
                                                                                        role="button"
                                                                                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                                                                                        data-rbd-drag-handle-draggable-id="0"
                                                                                        data-rbd-drag-handle-context-id="0"
                                                                                        draggable="false"
                                                                                        style={{ marginTop: 'auto', marginBottom: 'auto' }}
                                                                                    >
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">

                                                                                            </path>
                                                                                        </svg>
                                                                                    </div>

                                                                                    <div class="w-full mt-1 relative">
                                                                                        <input type="text" name="question" id="0" placeholder="keep it short" class="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-700 pr-20" maxlength="100" value="Who are you / what are you working on?" fdprocessedid="qwuklb" />
                                                                                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                                                            <span class="text-gray-500 sm:text-sm" id="price-currency">38/100</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="my-auto">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div data-rbd-draggable-context-id="0" data-rbd-draggable-id="1" class="mt-2">
                                                                                <div class="flex flex-row">
                                                                                    <div tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="1" data-rbd-drag-handle-context-id="0" draggable="false" style={{ marginTop: 'auto', marginBottom: 'auto' }} fdprocessedid="tj8bp9">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                                                                    </div>
                                                                                    <div class="w-full mt-1 relative">
                                                                                        <input type="text" name="question" id="1" placeholder="keep it short" class="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-700 pr-20" maxlength="100" value="How has [our product / service] helped you?" fdprocessedid="dp0i5m" />
                                                                                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                                                            <span class="text-gray-500 sm:text-sm" id="price-currency">43/100</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="my-auto">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                            <div class="flex flex-row">
                                                                                <div tabindex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0" data-rbd-drag-handle-draggable-id="2" data-rbd-drag-handle-context-id="0" draggable="false" style={{ marginTop: 'auto', marginBottom: 'auto' }} fdprocessedid="zatzg">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                                                                </div>
                                                                                <div class="w-full mt-1 relative">
                                                                                    <input type="text" name="question" id="2" placeholder="keep it short" class="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-700 pr-20" maxlength="100" value="What is the best thing about [our product / service]" fdprocessedid="oc22g8" />
                                                                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                                                        <span class="text-gray-500 sm:text-sm" id="price-currency">52/100</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="my-auto">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="mt-2 flex flex-row items-center p-1 pl-0 border border-transparent rounded-full text-gray-800 text-sm" fdprocessedid="n0kamg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 mr-1">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                <span>Add one (up to 5)</span>
                                                            </button>

                                                        </div>

                                                    </div>

                                                    <div class="flex flex-wrap -mx-3 mb-4">
                                                        <div class="w-full px-3">
                                                            <label class="flex flex-row text-gray-700 text-sm font-medium mb-2" for="header">Custom button color
                                                                <div>

                                                                    <div class="__react_component_tooltip t70210919-6147-4e23-8729-9dab29d072b0 place-top type-dark" id="btn-color-tip" data-id="tooltip" style={{ left: '650px', top: '468px' }}>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div>
                                                                <div style={{ width: '120px', display: 'flex' }}>
                                                                    <div style={{ width: '25px', height: '25px', borderRadius: '50%', border: '2px solid #ccc', cursor: 'pointer', backgroundColor: '#191970' }}></div>
                                                                    <div style={{ width: '25px', height: '25px', borderRadius: '50%', border: '2px solid #ccc', cursor: 'pointer', backgroundColor: '#5D5DFF' }}></div>
                                                                    <div style={{ width: '25px', height: '25px', borderRadius: '50%', border: '2px solid #ccc', cursor: 'pointer', backgroundColor: '#FF0000' }}></div>
                                                                    <div style={{ width: '25px', height: '25px', borderRadius: '50%', border: '2px solid #ccc', cursor: 'pointer', backgroundColor: '#9400D3' }}></div>
                                                                    <div style={{ width: '25px', height: '25px', borderRadius: '50%', border: '2px solid #ccc', cursor: 'pointer', backgroundColor: '#EEB422' }}></div>
                                                                   
                                                                </div>
                                                            </div>
                                                            <input type='text' placeholder="Hex Code" style={{ height: '20px' }} />
                                                        </div>
                                                    </div>

                                                    <div class="flex flex-wrap -mx-3 mt-6">
                                                        <div class="w-full px-3">
                                                            <button class="btn text-white bg-purple-600 hover:bg-purple-700 w-full" fdprocessedid="1oqjvq">Create new Space</button>
                                                        </div>
                                                    </div>




                                                </div>
                                            </section>
                                        </div>






                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InputForm