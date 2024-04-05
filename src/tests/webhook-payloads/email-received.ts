export default {
  timestamp: '2024-03-06T12:37:10.228Z',
  workspaceId: 'w_01FXQ6A83FXNN9XA00415VR1XP',
  payload: {
    eventType: 'thread.email_received',
    thread: {
      id: 'th_01HR9W9147XGMZWYF9D030XJ9J',
      customer: {
        id: 'c_01H0MHCVC5EGDGY3EJXTHHWTGR',
        email: {
          email: 'john@example.com',
          isVerified: true,
          verifiedAt: '2023-05-17T09:41:55.715Z',
        },
        externalId: 'really_long_external_id_123456789_abcdefgh',
        fullName: 'John Smith',
        shortName: 'John',
        markedAsSpamAt: null,
        markedAsSpamBy: null,
        customerGroupMemberships: [],
        createdAt: '2023-05-17T09:41:55.717Z',
        createdBy: { actorType: 'system', system: 'email_inbound_handler' },
        updatedAt: '2024-03-06T12:37:09.796Z',
        updatedBy: { actorType: 'system', system: 'email_inbound_handler' },
      },
      title: 'Webhook',
      previewText: 'test',
      priority: 2,
      externalId: null,
      status: 'TODO',
      statusChangedAt: '2024-03-06T12:37:09.732Z',
      statusChangedBy: { actorType: 'customer', customerId: 'c_01H0MHCVC5EGDGY3EJXTHHWTGR' },
      statusDetail: { type: 'CREATED', createdAt: '2024-03-06T12:37:09.732Z' },
      assignee: null,
      assignedAt: null,
      labels: [],
      firstInboundMessageInfo: { timestamp: '2024-03-06T12:37:09.732Z', messageSource: 'EMAIL' },
      firstOutboundMessageInfo: null,
      lastInboundMessageInfo: { timestamp: '2024-03-06T12:37:09.732Z', messageSource: 'EMAIL' },
      lastOutboundMessageInfo: null,
      supportEmailAddresses: ['help@getresolve.io'],
      createdAt: '2024-03-06T12:37:09.732Z',
      createdBy: { actorType: 'customer', customerId: 'c_01H0MHCVC5EGDGY3EJXTHHWTGR' },
      updatedAt: '2024-03-06T12:37:09.732Z',
      updatedBy: { actorType: 'customer', customerId: 'c_01H0MHCVC5EGDGY3EJXTHHWTGR' },
    },
    email: {
      timelineEntryId: 't_01HR9W90Z4CTRWNFPPKC4K6VK8',
      id: 'em_01HR9W8ZSVE4Q8KVBK5CP65SRE',
      to: {
        email: 'help@getresolve.io',
        name: null,
        emailActor: { actorType: 'supportEmailAddress', supportEmailAddress: 'help@getresolve.io' },
      },
      from: {
        email: 'john@example.com',
        name: 'John Smith',
        emailActor: { actorType: 'customer', customerId: 'c_01H0MHCVC5EGDGY3EJXTHHWTGR' },
      },
      replyTo: null,
      additionalRecipients: [],
      hiddenRecipients: [],
      subject: 'Webhook',
      textContent: 'test',
      markdownContent: 'test',
      authenticity: 'PASS',
      sentAt: null,
      receivedAt: '2024-03-06T12:37:08.539Z',
      attachments: [],
      inReplyToEmailId: null,
      isStartOfThread: false,
      createdAt: '2024-03-06T12:37:10.228Z',
      createdBy: { actorType: 'customer', customerId: 'c_01H0MHCVC5EGDGY3EJXTHHWTGR' },
      updatedAt: '2024-03-06T12:37:10.228Z',
      updatedBy: { actorType: 'customer', customerId: 'c_01H0MHCVC5EGDGY3EJXTHHWTGR' },
    },
  },
  id: 'pEv_01HR9W91EMR655WS6VC2867D3C',
  webhookMetadata: {
    webhookTargetId: 'whTarget_01HR9VYX2GYKX1XCTFXRG1K3MX',
    webhookDeliveryAttemptId: 'whAttempt_01HR9W92RSJZA4011XDNHJ5VK7',
    webhookDeliveryAttemptNumber: 1,
    webhookDeliveryAttemptTimestamp: '2024-03-06T12:37:11.577Z',
  },
  type: 'thread.email_received',
};