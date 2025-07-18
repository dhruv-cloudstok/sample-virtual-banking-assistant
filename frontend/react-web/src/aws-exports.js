/*********************************************************************************************************************
*  Copyright 2025 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
*                                                                                                                    *
*  Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance        *
*  with the License. A copy of the License is located at                                                             *
*                                                                                                                    *
*      http://aws.amazon.com/asl/                                                                                    *
*                                                                                                                    *
*  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES *
*  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
*  and limitations under the License.                                                                                *
**********************************************************************************************************************/

/**
 * AWS Configuration
 * 
 * This module exports configuration settings for AWS services used by the application.
 * Values are populated during deployment from CloudFormation outputs.
 */

/**
 * AWS Amplify authentication configuration.
 * Contains Cognito User Pool and Identity Pool settings for user authentication.
 * 
 * @constant
 * @type {Object}
 * @property {string} Auth.Cognito.userPoolClientId - Cognito User Pool Client ID
 * @property {string} Auth.Cognito.userPoolId - Cognito User Pool ID
 * @property {string} Auth.Cognito.identityPoolId - Cognito Identity Pool ID
 * @property {string} Auth.Cognito.region - AWS region for Cognito services
 */
export const awsConfig = {
    Auth: {
        Cognito: {
            userPoolClientId: '4mjf1kq8gfadvg6gh20595v81v',
            userPoolId: 'ap-south-1_zNut7ceC3',
            identityPoolId: 'ap-south-1:d19ae463-16d7-464e-8c3a-02f20e81985e',
            region: 'ap-south-1'
        }
    }
}

/**
 * WebSocket API secret
 * 
 * @constant
 * @type {string}
 */
export const apiKey = `B8e9OY3IxKUTcZcswawmPvYmLFq4VU8yD9lxEdTahM7Y64sc9s`

/**
 * WebSocket endpoint URL
 * 
 * @constant
 * @type {string}
 */
export const apiUrl = "wss://vba.example.acme/ws"

/**
 * Avatar .glb model filename
 * 
 * @constant
 * @type {string}
 */
export const avatarFileName = "sophia.glb"

/**
 * Avatar jaw bone name
 * 
 * @constant
 * @type {string}
 */
export const avatarJawboneName = "rp_sophia_animated_003_idling_jaw"
