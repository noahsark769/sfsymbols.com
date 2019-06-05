import React from 'react';
import styled from 'styled-components';

function group(array, numPerGroup) {
    let result = [];
    let currentGroup = [];

    for (let item of array) {
        currentGroup.push(item);
        if (currentGroup.length === numPerGroup) {
            result.push(currentGroup);
            currentGroup = [];
        }
    }

    if (currentGroup.length > 0) {
        result.push(currentGroup);
    }

    return result;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Item = styled.div`
    flex: 1;
`;

const FlowGrid = (props) => {
    let groupedChildren = group(props.children, props.columns);
    return (<Container>
        {groupedChildren.map(function(group, index) {
            return (<Row key={index}>
                {group.map(function(child, index) {
                    return (<Item key={index}>{child}</Item>);
                })}
            </Row>);
        })}
    </Container>);
};
export default FlowGrid;