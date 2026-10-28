import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout.tsx';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children: 'Lorem Ipsum ',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
};
