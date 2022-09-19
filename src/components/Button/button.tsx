import React from 'react';

export type ButtonProps = {
  /**
   * 是否是块级元素
   */
  block?: boolean;
  /**
   * 按钮的颜色
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 填充模式
   */
  fill?: 'solid' | 'outline' | 'none';
  /**
   * 大小
   */
  size?: 'mini' | 'small' | 'middle' | 'large';
  /**
   * 是否处于加载状态，'auto' 模式会监听 onClick 的 Promise 状态自动更新 loading
   */
  loading?: boolean | 'auto';
  /**
   * 加载状态下额外展示的文字
   */
  loadingText?: string;
  /**
   * 加载状态下的 icon 图标
   */
  loadingIcon?: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | Promise<void> | unknown;
  /**
   * 原生 button 元素的 type 属性
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * 按钮的形状
   */
  shape?: 'default' | 'rounded' | 'rectangular';
  /**
   * @ignore
   */
  children?: React.ReactNode;
};

export function Button(props: ButtonProps) {
  return <div></div>;
}
