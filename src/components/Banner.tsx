
interface BannerProps {
    banner: string;
}

const Banner = ({ banner }: BannerProps) => {
    return (
        <h1 className="text-3xl text-left pt-4 px-7">{banner}</h1>
    );
}

export default Banner;