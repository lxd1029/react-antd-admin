import * as React from 'react'
import Loadable from 'react-loadable'
import {Skeleton} from "antd";

const loadingComponent = () => {
    return (
        <div>
            <Skeleton active/>
        </div>
    )
}

export default (loader,loading = loadingComponent) => {
    return Loadable({
        loader,loading
    })
}
