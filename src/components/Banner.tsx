
interface BannerProps {
    banner: string;
}

const Banner = ({ banner }: BannerProps) => {
    return (
        <h1>{banner}</h1>
    );
}

export default Banner;