import React from 'react';

interface Props {
    children: React.ReactNode;
    layout?: 'flex-row' | 'flex-col' | 'grid';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    cols?: string;
    class?: string;  
}

const Container: React.FC<Props> = ({ children, layout = 'flex-row', justify, alignItems, cols, class: customClass }) => {
    let containerStyle = 'h-full w-full px-20';

    if (layout === 'flex-row') {
        containerStyle += ' flex flex-row';
    } else if (layout === 'flex-col') {
        containerStyle += ' flex flex-col';
    } else if (layout === 'grid') {
        containerStyle += ' grid';
        if (cols) {
            containerStyle += ` grid-cols-${cols}`;
        }
    }

    if (justify) {
        containerStyle += ` justify-${justify}`;
    }
    if (alignItems) {
        containerStyle += ` items-${alignItems}`;
    }

    if (customClass) {
        containerStyle += ` ${customClass}`;
    }

    return (
        <div className={containerStyle}>
            {children}
        </div>
    );
};

export default Container;
