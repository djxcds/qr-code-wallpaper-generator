import defaultLogo from '../../assets/images/sample.png';

interface Props {
    logo: string;
    name: string;
}

const WallPaperPreview = ({ logo, name }: Props) => {
    const fallbackName = 'Gabe Newell';

    return (
        <div
            className='flex flex-col justify-between w-96 min-w-min  bg-gray-800'
            id='wallpaper'
        >
            <div>
                <div className='mt-28 w-full flex justify-center'>
                    <img
                        className='h-52 w-52'
                        src={logo || defaultLogo}
                        alt='ChitChat Logo'
                        id='qr-code'
                    />
                </div>
                <div className='my-32 text-white text-center w-64 text-2xl font-medium mx-auto '>
                    <div>{name || fallbackName}</div>
                </div>
            </div>
        </div>
    );
};

export default WallPaperPreview;
