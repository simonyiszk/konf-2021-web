import type { ISponsorLogoFields } from "@/@types/generated/contentful";

import SponsorLogo from "./SponsorLogo";
import styles from "./SponsorSection.module.scss";

type SponsorProps = {
	sponsors: ISponsorLogoFields[];
};

export default function SponsorSection({ sponsors }: SponsorProps) {
	const gold = sponsors.filter(
		(sponsor) => sponsor.sponsorshipGrade === "főtámogató",
	);
	const silver = sponsors.filter(
		(sponsor) => sponsor.sponsorshipGrade === "kiemelt támogató",
	);
	const bronze = sponsors.filter(
		(sponsor) => sponsor.sponsorshipGrade === "támogató",
	);
	return (
		<section className={styles.section}>
			<h3>Szponzoraink</h3>
			<div className={styles.wrap}>
				<h4>Főtámogatónk</h4>
				<div className={styles.containerOne}>
					{gold.map((sponsor) => {
						return <SponsorLogo key={sponsor.name} {...sponsor} size={232} />;
					})}
				</div>
			</div>
			<div className={styles.wrap}>
				<h4>Kiemelt támogatóink</h4>
				<div className={styles.containerMany}>
					{silver.map((sponsor) => {
						return <SponsorLogo key={sponsor.name} {...sponsor} size={172} />;
					})}
				</div>
			</div>
			<div className={styles.wrap}>
				<h4>További támogatóink</h4>
				<div className={styles.containerMany}>
					{bronze.map((sponsor) => {
						return <SponsorLogo key={sponsor.name} {...sponsor} size={128} />;
					})}
				</div>
			</div>
		</section>
	);
}
