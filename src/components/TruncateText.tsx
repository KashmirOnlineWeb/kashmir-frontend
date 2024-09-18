import type { NextPage } from 'next';

type TruncateTextType = {
    text?: string;
    limit?: any;
};
const TruncateText: NextPage<TruncateTextType> = ({ text, limit }) => {
    const truncate = (text: string | undefined, limit: any) => {
        if (!text) {
            return ''; // Return an empty string or some default value if text is undefined or null
        }

        const words = text.split(' ');
        if (words?.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    return <span dangerouslySetInnerHTML={{ __html: truncate(text, limit) }} />;
};

export default TruncateText;

