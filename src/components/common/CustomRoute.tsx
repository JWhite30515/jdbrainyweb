import * as React from 'react';

import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

export interface CustomRouteProps extends RouteProps {
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
    extraProps?: any;
}

export default function CustomRoute({
    component,
    extraProps,
    ...rest
}: CustomRouteProps) {
    let Component = component;
    return (
        <Route 
            {...rest}
            render={(renderProps: RouteComponentProps<any>) => (
                <Component {...renderProps} {...extraProps} />
            )}
        />
    );
}