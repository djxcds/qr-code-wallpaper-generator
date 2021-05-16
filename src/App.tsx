import { useState, ChangeEvent } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

import './App.css';

import WallpaperPreview from './components/WallpaperPreview/WallpaperPreview';
import WallpaperControls from './components/WallpaperControls/WallpaperControls';

const App = () => {
    let fileReader: FileReader;

    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');

    const handleFileRead = (e: any) => {
        const content = fileReader.result;
        setLogo(content as string);
    };

    const readFileInput = (e: any) => {
        if (!e) {
            return;
        }
        fileReader = new FileReader();

        fileReader.onloadend = handleFileRead;
        fileReader.readAsDataURL(e);
    };

    const downloadPng = async () => {
        try {
            const node = document.getElementById('wallpaper');

            const file = await toPng(node as HTMLElement);
            const filename = name
                .replace('.', '')
                .split(' ')
                .join('_')
                .toLowerCase();
            download(file, filename);
        } catch (error) {
            console.log('error');
        }
    };

    const updateName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div className='h-screen w-full bg-indigo-300 flex items-center'>
            <div className='p-3 mx-auto bg-white rounded-xl shadow-md grid md:grid-cols-2 grid-cols-1 space-x-4'>
                <WallpaperPreview logo={logo} name={name} />
                <WallpaperControls
                    readFileInput={readFileInput}
                    downloadPng={downloadPng}
                    name={name}
                    updateName={updateName}
                />
            </div>
        </div>
    );
};

export default App;
