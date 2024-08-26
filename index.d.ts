import React from 'react';

export interface GitHubButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  'data-color-scheme'?: 'no-preference' | 'light' | 'dark';
  'data-icon'?: 'octicon-star' | 'octicon-repo-forked' | 'octicon-eye' | 'octicon-issue-opened' | 'octicon-git-pull-request';
  'data-size'?: 'large' | 'small';
  'data-show-count'?: boolean | 'true' | 'false';
  'data-text'?: string;
  'aria-label'?: string;
  children?: React.ReactNode;
}

declare const GitHubButton: React.FC<GitHubButtonProps>;

export default GitHubButton;