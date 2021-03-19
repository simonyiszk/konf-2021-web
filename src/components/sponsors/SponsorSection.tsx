import type { Entry } from "contentful";

import type { ISponsorLogoFields } from "@/@types/generated/contentful";

import SponsorLogo from "./SponsorLogo";
import styles from "./SponsorSection.module.scss";

type SponsorProps = {
	sponsors: Array<Entry<ISponsorLogoFields>>;
};

export default function SponsorSection({ sponsors }: SponsorProps) {
	const gold = sponsors.filter(
		(sponsor) => sponsor.fields.sponsorshipGrade === "főtámogató",
	);
	const silver = sponsors.filter(
		(sponsor) => sponsor.fields.sponsorshipGrade === "kiemelt támogató",
	);
	const bronze = sponsors.filter(
		(sponsor) => sponsor.fields.sponsorshipGrade === "támogató",
	);
	return (
		<section className={styles.section}>
			<h3>Szponzoraink</h3>
			<div className={styles.wrap}>
				<h4>Főtámogató</h4>
				<div className={styles.containerOne}>
					{gold.map((sponsor) => {
						return (
							<SponsorLogo
								key={sponsor.fields.name}
								{...sponsor.fields}
								size={232}
							/>
						);
					})}
				</div>
			</div>
			<div className={styles.wrap}>
				<h4>Kiemelt támogatók</h4>
				<div className={styles.containerMany}>
					{silver.map((sponsor) => {
						return (
							<SponsorLogo
								key={sponsor.fields.name}
								{...sponsor.fields}
								size={172}
							/>
						);
					})}
				</div>
			</div>
			<div className={styles.wrap}>
				<h4>További támogatók</h4>
				<div className={styles.containerMany}>
					{bronze.map((sponsor) => {
						return (
							<SponsorLogo
								key={sponsor.fields.name}
								{...sponsor.fields}
								size={128}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
