import React, {Component} from 'react';
import {Query, Builder, Preview, Utils} from 'react-awesome-query-builder';
const {queryBuilderFormat, queryString} = Utils;
import config from './config';
var stringify = require('json-stringify-safe');
import '../../css/reset.scss';
import '../../css/styles.scss';
import '../../css/compact_styles.scss';
import '../../css/denormalize.scss';
const Immutable = require('immutable');
const transit = require('transit-immutable-js');

/*
let ruleset = {
    "condition": "AND",
    "rules": [
        {
            "id": "name",
            "field": "name",
            "type": "string",
            "input": "text",
            "operator": "less",
            "value": "test name"
        },
        {
            "condition": "OR",
            "rules": [
                {
                    "id": "category",
                    "field": "date",
                    "type": "date",
                    "input": "date",
                    "operator": "equal",
                    "value": "2012-01-12"
                },
                {
                    "id": "category",
                    "field": "name",
                    "type": "string",
                    "input": "text",
                    "operator": "equal",
                    "value": "1"
                }
            ]
        }
    ]
}
*/


export default class DemoQueryBuilder extends Component {
    getChildren(props) {
        return (
            <div>
                <div className="query-builder">
                    <Builder {...props} />
                </div>
                <br />
                <div>queryBuilderFormat: {stringify(queryBuilderFormat(props.tree, props.config))}</div>
                <div>stringFormat: {queryString(props.tree, props.config)}</div>
                <div>humanStringFormat: {queryString(props.tree, props.config, true)}</div>
                <div>Tree: {stringify(props.tree)}</div>
                <div>Immutable Tree: {transit.toJSON(props.tree)}</div>
            </div>
        )
    }

    render() {
        let initValueJSON = '["~#iM",["type","group","id","9a99988a-0123-4456-b89a-b1607f326fd8","children1",["~#iOM",["a98ab9b9-cdef-4012-b456-71607f326fd9",["^0",["type","rule","id","a98ab9b9-cdef-4012-b456-71607f326fd9","properties",["^0",["field","num","operator","less","value",["~#iL",[2]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["number"]]]]]]]],"properties",["^0",["conjunction","AND"]]]]';

        const {tree, ...config_props} = config;
                
        return (
            <div>
                <Query 
                    value={transit.fromJSON(initValueJSON)}
                    {...config_props} 
                    get_children={this.getChildren}
                > </Query>
            </div>
        );
    }
}

