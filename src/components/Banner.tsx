
interface BannerProps {
    banner: string;
}

const Banner = ({ banner }: BannerProps) => {
    return (
        <h1 className="text-3xl text-left p-3">{banner}</h1>
    );
}

export default Banner;