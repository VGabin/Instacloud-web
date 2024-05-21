import React, {MouseEventHandler, ReactNode} from 'react';

interface ModalProps {
    children: ReactNode,
    closeModal: MouseEventHandler<HTMLButtonElement>,
    isShowModal: Boolean
}

const Modal = ({children, closeModal, isShowModal}: ModalProps) => {
    return (
        isShowModal && <div className="relative z-50">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen">
                <div
                    className="flex h-screen-minus-70 max-w-screen-md mx-auto items-end justify-center p-2 text-center sm:items-center sm:p-0 h">
                    <div
                        className="relative transform text-left shadow-xl transition-all max-w-screen-md h-full w-full">
                        <div className="px-2 pt-5 bg-gray-100 h-full">
                            <div className="mx-auto max-w-screen-md h-full overflow-y-auto">
                                <div className="flex flex-col items-center">
                                    <div className="w-full p-4 md:p-6 ">
                                        <div className="flex justify-end ">
                                            <button type="button" onClick={closeModal}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;