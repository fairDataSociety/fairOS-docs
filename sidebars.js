module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'FairOS',
      items: [
        'fairOS/introduction',
        'fairOS/architecture',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'FairOS-dfs',
      items: [
        'fairOS-dfs/introduction',
        'fairOS-dfs/quickstart',
        'fairOS-dfs/manual-installation',
        'fairOS-dfs/docker-installation',
        'fairOS-dfs/postage-batch-id',
        'fairOS-dfs/api-reference',
        'fairOS-dfs/cli-reference',
        'fairOS-dfs/developer-info',
	{
          type: 'category',
          label: 'Screencast',
          items: [
            'fairOS-dfs/video/introduction',
            'fairOS-dfs/video/file-sharing',
            'fairOS-dfs/video/adding-a-new-device',
            'fairOS-dfs/video/public-pods',
            'fairOS-dfs/video/kv-store-introduction',
            'fairOS-dfs/video/kv-store-data-demo',
            'fairOS-dfs/video/doc-store-introduction',
            'fairOS-dfs/video/doc-store-data-demo'
           ]
	}
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'FairOS-compute',
      items: [
        'fairOS-compute/introduction',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Join Us',
      items: [
        'community/community'
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Disclaimer',
      items: [
        'disclaimer/disclaimer'
      ],
      collapsed: true,
    }
  ]
};
