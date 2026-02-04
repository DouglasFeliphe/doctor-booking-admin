import { twMerge } from 'tailwind-merge'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import type { ComponentProps } from 'react'
import { Input, type InputProps } from './input'

export interface PasswordInputProps extends Omit<InputProps, 'type'> {
	showToggle?: boolean
}

export function PasswordInput({ className, showToggle = true, ...props }: PasswordInputProps) {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div data-slot="password-input" className="relative">
			<Input
				type={isVisible ? 'text' : 'password'}
				className={twMerge(showToggle && 'pr-10', className)}
				{...props}
			/>
			{showToggle && (
				<button
					type="button"
					aria-label={isVisible ? 'Hide password' : 'Show password'}
					onClick={() => setIsVisible(!isVisible)}
					className={twMerge(
						'absolute right-3 top-1/2 -translate-y-1/2 rounded text-muted-foreground transition-colors',
						'hover:text-foreground',
						'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
					)}
				>
					{isVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
				</button>
			)}
		</div>
	)
}
