import * as React from 'react';

interface AsyncComponentLoaderProps {
    load: Promise<any>;
    componentProps?: any;
}

export class AsyncComponentLoader extends React.Component<AsyncComponentLoaderProps, any> {
    private comp = null;

    public componentWillMount() {
        this.props.load.then((c) => {
            this.comp = c.default ? c.default : c;
            this.forceUpdate();
        });
    }

    public render() {
        const {componentProps} = this.props;
        if (this.comp !== null) {
            let Comp = this.comp;
            Comp.props = componentProps;
            return <Comp {...componentProps} />;
        }
        return null;
    }
}
