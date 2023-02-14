import NextLink from 'next/link';
import { Text } from '../../theme/components';

export default function Link({ children, href, ...props}) {
    return (
        <NextLink href={href} passHref>
         {children}
        </NextLink>
    );
}