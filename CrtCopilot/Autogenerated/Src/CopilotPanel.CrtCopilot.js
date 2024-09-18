define("CopilotPanel", /**SCHEMA_DEPS*/["css!CopilotPanel"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "RestartSessionButton",
				"values": {
					"type": "crt.Button",
					"icon": "restart-button-icon",
					"size": "medium",
					"iconPosition": "only-icon",
					"title": "#ResourceString(CopilotRestartSessionButton_title)#",
					"clicked": {
						"request": "crt.CopilotRestartSessionRequest",
						"params": {
							"chatMessagesAttributeName": "ChatMessages",
							"conversationEventAttributeName": "ConversationEvent"
						}
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"padding": {
						"top": "none",
						"bottom": "none",
					}
				}
			},
			{
				"operation": "insert",
				"name": "Conversation",
				"values": {
					"type": "crt.Conversation",
					"actions": [],
					"information": [],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "copilot"
							},
							"title": null,
							"subhead": null
						},
						{
							"type": "crt.Label",
							"caption": "#MacrosTemplateString(#ResourceString(CopilotTitle_caption)#)#",
							"labelType": "headline-3",
							"labelColor": "#0D2E4E",
							"labelTextAlign": "center",
							"labelMargin": "24px 0 0 0"
						},
						{
							"type": "crt.Label",
							"caption": "#MacrosTemplateString(#ResourceString(CopilotTitle_text)#)#",
							"labelType": "body",
							"labelThickness": "default",
							"labelMargin": "16px 0 8px 0"
						},
						{
							"type": "crt.TemplateList",
							"items": "$CopilotQuickActions",
							"direction": 'row',
							"gap": 32,
							"template": [
								{
									"type": "crt.Button",
									"caption": "$CopilotQuickActions.CopilotQuickActionsDS_Name",
									"size": "medium",
									"clicked": {
										"request": "crt.CopilotActionRequest",
										"params": {
											"prompt": "$CopilotQuickActions.CopilotQuickActionsDS_Name"
										}
									},
								}
							],
							"classes": [
								"copilot-actions-list"
							]
						},
					],
					"conversationEvent": "$ConversationEvent",
					"messages": "$ChatMessages",
					"isTyping": "$IsTyping",
					"tools": [],
					"typing": [
						{
							"type": "crt.ChatTyping",
							"author": "$CopilotContact",
							"message": "#ResourceString(CopilotTyping_text)#"
						}
					]
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_MessageEditor",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"justifyContent": "start",
					"gap": "none",
					"alignItems": "center",
					"items": []
				},
				"parentName": "Conversation",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Conversation_MessageEditor",
				"values": {
					"type": "crt.MessageEditor",
					"items": [],
				},
				"parentName": "FlexContainer_MessageEditor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MessageEditorBody",
				"values": {
					"type": "crt.MessageEditorBody",
					"toolbarItems": [],
					"inputs": [],
					"isFocused": "$IsFocused",
					"chatInput": "$ChatInput",
					"sendMessage": {
						"request": "crt.MessageEditorSendRequest",
						"params": {
							"attributesMapping": "$MessageEditorAttributesMapping"
						}
					}
				},
				"parentName": "Conversation_MessageEditor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MessageEditorCrtInput",
				"values": {
					"type": "crt.MessageEditorInput",
					"chatInput": "$ChatInput",
					"isFocused": "$IsFocused",
					"sendMessage": {
						"request": "crt.MessageEditorSendRequest",
						"params": {
							"attributesMapping": "$MessageEditorAttributesMapping"
						}
					}
				},
				"parentName": "MessageEditorBody",
				"propertyName": "inputs",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		"viewModelConfig": /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"ChatMessages": {},
				"CopilotContact": {},
				"CopilotQuickActions": {
					"isCollection": true,
					"modelConfig": {
						"path": "CopilotQuickActionsDS",
						"pagingConfig": {
							"rowCount": 5
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "ActiveIntents_r8uqh52_PredefinedFilter"
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"CopilotQuickActionsDS_Id": {
								"modelConfig": {
									"path": "CopilotQuickActionsDS.Id"
								}
							},
							"CopilotQuickActionsDS_Name": {
								"modelConfig": {
									"path": "CopilotQuickActionsDS.Name"
								}
							}
						}
					},
				},
				"ActiveIntents_r8uqh52_PredefinedFilter": {
					"value": {
						"isEnabled": true,
						"trimDateTimeParameterToDate": false,
						"filterType": 6,
						"logicalOperation": 0,
						"items": {
							"ActiveIntents": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "Status"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "1D73B111-07A9-49E2-AA15-C9415CCE7470"
									}
								}
							}
						}
					}
				},
				"IsTyping": {},
				"IsFocused": {},
				"ChatInput": {
					"value": ""
				},
				"ConversationEvent": {
					"value": []
				},
				"MessageEditorAttributesMapping": {
					"value": {
						"chatInput": "ChatInput",
						"chatMessages": "ChatMessages"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"CopilotQuickActionsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CopilotIntent",
							"attributes": {
								"Id": {
									"path": "Id"
								},
								"Name": {
									"path": "Name"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
 