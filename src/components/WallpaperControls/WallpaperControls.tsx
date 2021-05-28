interface Props {
    readFileInput: (e: any) => void;
    downloadPng: () => void;
    name: string;
    updateName: (e: any) => void;
}

const WallpaperControls = ({
    readFileInput,
    downloadPng,
    name,
    updateName,
}: Props) => {
    return (
        <div className='w-96 min-w-min'>
            <div>
                <div className='text-center text-3xl font-medium'>
                    QR Code Wallpaper Generator Beta
                </div>
                <p className='my-6 text-gray-500'>
                    Generate your QR Code wallpaper fast and easy as 1-2-3! Just
                    type your full name, upload QR Code and download. This app
                    won't store your Personal Data, therefore will only run on
                    your browser.
                </p>
            </div>
            <div>
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='fullname'
                    >
                        Step 1 - Enter Full Name
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={name}
                        id='fullname'
                        onChange={(e) => updateName(e)}
                        type='text'
                        placeholder='Ex. Gabe Newell'
                    />
                </div>
            </div>
            <div>
                <span className='text-gray-700 text-sm font-bold'>
                    Step 2 - Upload QR Code
                </span>
                <div className='relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer'>
                    <div className='absolute'>
                        <div className='flex flex-col items-center '>
                            <i className='fa fa-cloud-upload fa-3x text-gray-200'></i>
                            <span className='block text-gray-400 font-normal'>
                                Drag an image here
                            </span>
                            <span className='block text-gray-400 font-normal'>
                                or
                            </span>
                            <span className='block text-blue-400 font-normal'>
                                Browse files
                            </span>
                        </div>
                    </div>
                    <input
                        type='file'
                        className='h-full w-full opacity-0'
                        name=''
                        accept='.jpeg,.jpg,.png'
                        onChange={(e) =>
                            readFileInput((e.target.files as FileList)[0])
                        }
                    />
                </div>
                <div className='flex justify-between items-center text-gray-400'>
                    <span>Accepted file type:.jpeg .jpg .png only</span>
                </div>
            </div>
            <div className='mt-4'>
                <span className='text-gray-700 text-sm font-bold'>
                    Step 3 -Download your wallpaper
                </span>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
                    onClick={() => downloadPng()}
                >
                    Download
                </button>
            </div>
        </div>
    );
};

export default WallpaperControls;
