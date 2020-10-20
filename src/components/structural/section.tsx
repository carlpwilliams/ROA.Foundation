import React, { Component } from 'react'
import './section.scss';
export enum sectionType {
    full,
    banner
}
type Props = { children: any, className?: any; type?: sectionType, bannerImage?: any; style?:any }
export class Section extends Component<Props> {
    render() {
        return (
            <div className={this.getClassname()} style={{ backgroundImage: `url(${this.props.bannerImage})`, ...this.props.style }}>
                <div className="inner">
                    {this.props.children}
                </div>
            </div>
        )
    }

    getClassname = () => {
        let ret = "section ";
        switch (this.props.type) {
            case sectionType.banner:
                ret += "container-fluid banner ";
                break;
            default:
                ret += "pt-5 pb-5";
        }

        return `${ret} ${this.props.className}`;
    }
}

export default Section
