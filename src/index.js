/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { Dropdown } from '@wordpress/components';
import * as Woo from '@woocommerce/components';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './index.scss';

const MyExamplePage = () => (
	<Fragment>
		<Woo.Section component="article">
			<Woo.SectionHeader title={__('Search', 'grateful-payments')} />
			<Woo.Search
				type="products"
				placeholder="Search for something"
				selected={[]}
				onChange={(items) => setInlineSelect(items)}
				inlineTags
			/>
		</Woo.Section>

		<Woo.Section component="article">
			<Woo.SectionHeader title={__('Dropdown', 'grateful-payments')} />
			<Dropdown
				renderToggle={({ isOpen, onToggle }) => (
					<Woo.DropdownButton
						onClick={onToggle}
						isOpen={isOpen}
						labels={['Dropdown']}
					/>
				)}
				renderContent={() => <p>Dropdown content here</p>}
			/>
		</Woo.Section>

		<Woo.Section component="article">
			<Woo.SectionHeader
				title={__('Pill shaped container', 'grateful-payments')}
			/>
			<Woo.Pill className={'pill'}>
				{__('Pill Shape Container', 'grateful-payments')}
			</Woo.Pill>
		</Woo.Section>

		<Woo.Section component="article">
			<Woo.SectionHeader title={__('Spinner', 'grateful-payments')} />
			<Woo.H>I am a spinner!</Woo.H>
			<Woo.Spinner />
		</Woo.Section>

		<Woo.Section component="article">
			<Woo.SectionHeader title={__('Datepicker', 'grateful-payments')} />
			<Woo.DatePicker
				text={__('I am a datepicker!', 'grateful-payments')}
				dateFormat={'MM/DD/YYYY'}
			/>
		</Woo.Section>
	</Fragment>
);

addFilter('woocommerce_admin_pages_list', 'grateful-payments', (pages) => {
	pages.push({
		container: MyExamplePage,
		path: '/grateful-payments',
		breadcrumbs: [__('Grateful Payments', 'grateful-payments')],
		navArgs: {
			id: 'grateful_payments',
		},
	});

	return pages;
});
