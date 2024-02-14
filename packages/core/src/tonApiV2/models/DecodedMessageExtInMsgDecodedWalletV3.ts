/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DecodedRawMessage } from './DecodedRawMessage';
import {
    DecodedRawMessageFromJSON,
    DecodedRawMessageFromJSONTyped,
    DecodedRawMessageToJSON,
} from './DecodedRawMessage';

/**
 * 
 * @export
 * @interface DecodedMessageExtInMsgDecodedWalletV3
 */
export interface DecodedMessageExtInMsgDecodedWalletV3 {
    /**
     * 
     * @type {number}
     * @memberof DecodedMessageExtInMsgDecodedWalletV3
     */
    subwalletId: number;
    /**
     * 
     * @type {number}
     * @memberof DecodedMessageExtInMsgDecodedWalletV3
     */
    validUntil: number;
    /**
     * 
     * @type {number}
     * @memberof DecodedMessageExtInMsgDecodedWalletV3
     */
    seqno: number;
    /**
     * 
     * @type {Array<DecodedRawMessage>}
     * @memberof DecodedMessageExtInMsgDecodedWalletV3
     */
    rawMessages: Array<DecodedRawMessage>;
}

/**
 * Check if a given object implements the DecodedMessageExtInMsgDecodedWalletV3 interface.
 */
export function instanceOfDecodedMessageExtInMsgDecodedWalletV3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subwalletId" in value;
    isInstance = isInstance && "validUntil" in value;
    isInstance = isInstance && "seqno" in value;
    isInstance = isInstance && "rawMessages" in value;

    return isInstance;
}

export function DecodedMessageExtInMsgDecodedWalletV3FromJSON(json: any): DecodedMessageExtInMsgDecodedWalletV3 {
    return DecodedMessageExtInMsgDecodedWalletV3FromJSONTyped(json, false);
}

export function DecodedMessageExtInMsgDecodedWalletV3FromJSONTyped(json: any, ignoreDiscriminator: boolean): DecodedMessageExtInMsgDecodedWalletV3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subwalletId': json['subwallet_id'],
        'validUntil': json['valid_until'],
        'seqno': json['seqno'],
        'rawMessages': ((json['raw_messages'] as Array<any>).map(DecodedRawMessageFromJSON)),
    };
}

export function DecodedMessageExtInMsgDecodedWalletV3ToJSON(value?: DecodedMessageExtInMsgDecodedWalletV3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subwallet_id': value.subwalletId,
        'valid_until': value.validUntil,
        'seqno': value.seqno,
        'raw_messages': ((value.rawMessages as Array<any>).map(DecodedRawMessageToJSON)),
    };
}
