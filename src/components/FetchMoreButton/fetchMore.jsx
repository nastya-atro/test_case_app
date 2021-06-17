import { useCallback } from 'react';
import Button from './../Button/index';

const FetchMoreComponent = ({ fetchMore, content }) => {

    const onFetchMore = useCallback(() => fetchMore(), [fetchMore]);

    return (
        <div>
           {content.length>1 ? <Button onClick={onFetchMore}>Show more</Button>: null} 
        </div>
    )
}

export default FetchMoreComponent