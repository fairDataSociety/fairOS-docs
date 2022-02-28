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
          label: 'Getting Started',
          items: [
            'fairOS-dfs/video/architecture',
            'fairOS-dfs/video/prerequisites',
            'fairOS-dfs/video/versions-tools',
            'fairOS-dfs/video/build-from-source',
            'fairOS-dfs/video/postage-stamps',
            'fairOS-dfs/video/using-bee-gateways',
            'fairOS-dfs/video/api-spec',
            'fairOS-dfs/video/run-server',
            'fairOS-dfs/video/run-cli-create-user',
            'fairOS-dfs/video/create-pod',
            'fairOS-dfs/video/work-with-files',
            'fairOS-dfs/video/work-with-kv-1',
            'fairOS-dfs/video/work-with-kv-2',
            'fairOS-dfs/video/work-with-doc',
            'fairOS-dfs/video/file-sharing',
            'fairOS-dfs/video/export-import-users',
            'fairOS-dfs/video/public-pod',
            'fairOS-dfs/video/clients-and-ws',
            'fairOS-dfs/video/wasm',
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
