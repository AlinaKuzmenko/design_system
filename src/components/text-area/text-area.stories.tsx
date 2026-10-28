import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './text-area';

import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Text Area Label',
    placeholder: 'Enter some text',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area when disabled',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text as required',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default = {
  component: TextArea,
  args: {},
};

export const WithCount = {
  args: {
    maxLength: 10,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');

    const count = canvas.getByTestId('length');
    const inputValue = 'Hello, World!';

    await userEvent.type(textArea, inputValue);
    await expect(count).toHaveTextContent(inputValue.length.toString());
  },
};

// export const LabelTooLong = {
//   args: {
//     maxLength: 15,
//   },
//   play: async ({ canvasElement }: any) => {
//     const canvas = within(canvasElement);
//     const textArea = canvas.getByRole('textbox');
//     const count = canvas.getByTestId('length');
//
//     const inputValue = 'Y' + 'o'.repeat(15);
//
//     await userEvent.type(textArea, inputValue);
//
//     await expect(count).toHaveTextContent(inputValue.length.toString());
//     await expect(textArea).toHaveAttribute('aria-invalid', 'true');
//     await expect(textArea).toHaveClass('ring-danger-500');
//   }
// }

export const Disabled = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    await expect(textArea).toBeDisabled();
    await expect(textArea).toHaveClass('disabled:cursor-not-allowed');
    await expect(textArea).toHaveClass('disabled:bg-slate-50');

    const inputValue = 'Hello, World!';
    await userEvent.type(textArea, inputValue);
    await expect(textArea).toHaveValue('');
  },
};
