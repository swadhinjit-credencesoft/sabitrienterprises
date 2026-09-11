'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  CalendarDays,
  Minus,
  Plus,
  Mail,
  MessageCircle,
  BedDouble,
  Clock,
  MapPin,
  PartyPopper,
  Gem,
  Map,
  Brush,
  X,
  CreditCard,
  Smartphone,
  Landmark,
  Wallet,
  ShieldCheck,
} from 'lucide-react';
import { Room, TourPackage, CollectionItem } from '@/types';
import { rooms } from '@/data/rooms';
import { tourPackages } from '@/data/tours';
import { jewelleryCollections } from '@/data/jewellery';
import { handicraftCategories } from '@/data/handicrafts';
import { parsePrice, formatINR } from '@/lib/format';
import { buildWhatsAppLink, buildMailtoLink } from '@/lib/links';
import { SITE_URL } from '@/lib/constants';
import styles from '@/components/forms/booking.module.scss';

const today = new Date().toISOString().split('T')[0];

const stepLabels = ['Choose', 'Details', 'Review', 'Payment'];

const arrivalOptions = [
  '12:00 PM (Check-in time)',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  'Late arrival (after 8 PM)',
];

const jewelleryProducts = jewelleryCollections.flatMap((c) =>
  c.products.map((p) => ({ ...p, collection: c.name })),
);

const handicraftProducts = handicraftCategories.flatMap((c) =>
  c.products.map((p) => ({ ...p, craft: c.name })),
);

interface SelectedLine {
  title: string;
  name: string;
  meta: string;
  image: string;
  total: number;
}

function RoomDetail({
  room,
  onClose,
}: {
  room: Room;
  onClose: () => void;
}) {
  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailHeader}>
        <img
          src={room.image}
          alt={room.name}
          className={styles.detailImage}
        />
        <div className={styles.detailHeadBody}>
          <span className={styles.detailTag}>{room.status}</span>
          <h4 className={styles.detailTitle}>{room.name}</h4>
          <p className={styles.detailMeta}>
            {room.size} · {room.beds} · up to {room.capacity} guests
          </p>
        </div>
        <button
          type="button"
          className={styles.detailClose}
          onClick={onClose}
          aria-label="Remove room"
        >
          <X size={16} />
        </button>
      </div>
      <div className={styles.detailBody}>
        <p className={styles.detailDesc}>{room.description}</p>
        <div className={styles.detailSpecs}>
          <div className={styles.detailSpec}>
            <span>Size</span>
            <strong>{room.size}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Beds</span>
            <strong>{room.beds}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Capacity</span>
            <strong>{room.capacity} guests</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Bathroom</span>
            <strong>{room.bathrooms}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Rate</span>
            <strong>{room.price} / night</strong>
          </div>
        </div>
        <div className={styles.detailCols}>
          <div className={styles.detailCol}>
            <h5>Highlights</h5>
            <ul className={styles.detailList}>
              {room.highlights.map((h) => (
                <li key={h}>
                  <Check size={13} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.detailCol}>
            <h5>Amenities</h5>
            <div className={styles.detailChips}>
              {room.amenities.map((a) => (
                <span key={a} className={styles.detailChip}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TourDetail({
  tour,
  onClose,
}: {
  tour: TourPackage;
  onClose: () => void;
}) {
  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailHeader}>
        <img
          src={tour.image}
          alt={tour.name}
          className={styles.detailImage}
        />
        <div className={styles.detailHeadBody}>
          <span className={styles.detailTag}>{tour.status}</span>
          <h4 className={styles.detailTitle}>{tour.name}</h4>
          <p className={styles.detailMeta}>
            <Clock size={13} />
            {tour.duration}
          </p>
        </div>
        <button
          type="button"
          className={styles.detailClose}
          onClick={onClose}
          aria-label="Remove tour"
        >
          <X size={16} />
        </button>
      </div>
      <div className={styles.detailBody}>
        <p className={styles.detailDesc}>{tour.description}</p>
        <div className={styles.detailSpecs}>
          <div className={styles.detailSpec}>
            <span>Duration</span>
            <strong>{tour.duration}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Status</span>
            <strong>{tour.status}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Price</span>
            <strong>{tour.price}</strong>
          </div>
        </div>
        <div className={styles.detailCols}>
          <div className={styles.detailCol}>
            <h5>Highlights</h5>
            <ul className={styles.detailList}>
              {tour.highlights.map((h) => (
                <li key={h}>
                  <Check size={13} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.itinerary}>
          <h5 className={styles.itineraryTitle}>Day-by-day itinerary</h5>
          <div className={styles.itineraryList}>
            {tour.itinerary.map((d) => (
              <div key={d.day + d.title} className={styles.itineraryDay}>
                <span className={styles.itineraryDayTag}>{d.day}</span>
                <div className={styles.itineraryDayBody}>
                  <strong>{d.title}</strong>
                  <p>{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetail({
  product,
  originLabel,
  origin,
  onClose,
}: {
  product: CollectionItem;
  originLabel: string;
  origin: string;
  onClose: () => void;
}) {
  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailHeader}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.detailImage}
        />
        <div className={styles.detailHeadBody}>
          <span className={styles.detailTag}>{product.category}</span>
          <h4 className={styles.detailTitle}>{product.name}</h4>
          <p className={styles.detailMeta}>
            {product.material} · {originLabel}: {origin}
          </p>
        </div>
        <button
          type="button"
          className={styles.detailClose}
          onClick={onClose}
          aria-label="Remove product"
        >
          <X size={16} />
        </button>
      </div>
      <div className={styles.detailBody}>
        <p className={styles.detailDesc}>{product.description}</p>
        <div className={styles.detailSpecs}>
          <div className={styles.detailSpec}>
            <span>Category</span>
            <strong>{product.category}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>{originLabel}</span>
            <strong>{origin}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Material</span>
            <strong>{product.material}</strong>
          </div>
          <div className={styles.detailSpec}>
            <span>Price</span>
            <strong>From {product.priceFrom}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingClient() {
  const [step, setStep] = useState(0);

  const [roomSlug, setRoomSlug] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const [tourSlug, setTourSlug] = useState<string | null>(null);
  const [travellers, setTravellers] = useState(2);
  const [tourDate, setTourDate] = useState('');

  const [jProductSlug, setJProductSlug] = useState<string | null>(null);
  const [jQty, setJQty] = useState(1);

  const [hProductSlug, setHProductSlug] = useState<string | null>(null);
  const [hQty, setHQty] = useState(1);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [arrival, setArrival] = useState(arrivalOptions[0]);
  const [requests, setRequests] = useState('');
  const [agree, setAgree] = useState(false);

  const [sent, setSent] = useState(false);

  const stayRef = useRef<HTMLDivElement>(null);
  const tourRef = useRef<HTMLDivElement>(null);
  const jewelleryRef = useRef<HTMLDivElement>(null);
  const craftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam && rooms.some((r) => r.slug === roomParam)) {
      setRoomSlug(roomParam);
    }
    const tourParam = params.get('tour');
    if (tourParam && tourPackages.some((t) => t.slug === tourParam)) {
      setTourSlug(tourParam);
    }
    const productParam = params.get('product');
    if (productParam) {
      if (jewelleryProducts.some((p) => p.slug === productParam)) {
        setJProductSlug(productParam);
      }
      if (handicraftProducts.some((p) => p.slug === productParam)) {
        setHProductSlug(productParam);
      }
    }
    const target: Record<string, React.RefObject<HTMLDivElement | null>> = {
      homestay: stayRef,
      tours: tourRef,
      jewellery: jewelleryRef,
      handicrafts: craftRef,
    };
    const divParam = params.get('division');
    if (divParam && target[divParam]?.current) {
      setTimeout(() => {
        target[divParam].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 150);
    }
  }, []);

  const room = rooms.find((r) => r.slug === roomSlug) ?? null;
  const tour = tourPackages.find((t) => t.slug === tourSlug) ?? null;
  const jProduct =
    jewelleryProducts.find((p) => p.slug === jProductSlug) ?? null;
  const hProduct =
    handicraftProducts.find((p) => p.slug === hProductSlug) ?? null;

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff =
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000;
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const roomRate = room ? parsePrice(room.price) : 0;
  const roomTotal = roomRate * nights;
  const tourRate = tour ? parsePrice(tour.price) : 0;
  const tourTotal = tourRate * travellers;
  const jTotal = jProduct ? parsePrice(jProduct.priceFrom) * jQty : 0;
  const hTotal = hProduct ? parsePrice(hProduct.priceFrom) * hQty : 0;
  const grandTotal = roomTotal + tourTotal + jTotal + hTotal;

  const roomPicked = Boolean(room);
  const staySelected = Boolean(room && nights >= 1);

  const selectedItems: SelectedLine[] = [];
  if (room) {
    selectedItems.push({
      title: 'Stay',
      name: room.name,
      meta:
        nights >= 1
          ? `${checkIn} → ${checkOut} · ${nights} night${
              nights === 1 ? '' : 's'
            } · ${guests} guest${guests === 1 ? '' : 's'}`
          : `Dates needed · ${room.price} / night · up to ${room.capacity} guests`,
      image: room.image,
      total: nights >= 1 ? roomTotal : 0,
    });
  }
  if (tour) {
    selectedItems.push({
      title: 'Tour',
      name: tour.name,
      meta: `${tour.duration} · ${travellers} traveller${
        travellers === 1 ? '' : 's'
      }${tourDate ? ` · ${tourDate}` : ''}`,
      image: tour.image,
      total: tourTotal,
    });
  }
  if (jProduct) {
    selectedItems.push({
      title: 'Jewellery',
      name: jProduct.name,
      meta: `${jProduct.material} · ${jProduct.collection} · Qty ${jQty}`,
      image: jProduct.image,
      total: jTotal,
    });
  }
  if (hProduct) {
    selectedItems.push({
      title: 'Handicraft',
      name: hProduct.name,
      meta: `${hProduct.material} · ${hProduct.craft} · Qty ${hQty}`,
      image: hProduct.image,
      total: hTotal,
    });
  }

  const hasSelection = Boolean(room || tour || jProduct || hProduct);

  const detailsValid = Boolean(
    name.trim() &&
      phone.trim() &&
      agree &&
      (email.trim() === '' || email.includes('@')),
  );

  const canNext =
    step === 0
      ? hasSelection
      : step === 1
        ? detailsValid
        : step === 2
          ? true
          : false;

  const nextLabel =
    step === 1 ? 'Review & Confirm' : step === 2 ? 'Continue to Payment' : 'Continue';

  const barCtaLabel =
    step === 1 ? 'Review' : step === 2 ? 'Payment' : 'Continue';

  const goNext = () => {
    if (!canNext) return;
    setStep((s) => Math.min(s + 1, stepLabels.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const summaryLines = (): string[] => {
    const isBookingFlow = Boolean(staySelected || tour);
    const lines = [
      isBookingFlow
        ? 'NEW BOOKING REQUEST — Sabitri Enterprises, Puri'
        : 'NEW ENQUIRY — Sabitri Enterprises, Puri',
      '----------------------------------',
      `Name: ${name.trim() || '—'}`,
      `Phone: ${phone.trim() || '—'}`,
      `Email: ${email.trim() || '—'}`,
      '',
    ];
    if (staySelected && room) {
      lines.push(
        'STAY',
        `Room: ${room.name}`,
        `Check-in: ${checkIn} (12:00 PM)`,
        `Check-out: ${checkOut} (11:00 AM)`,
        `Nights: ${nights}`,
        `Guests: ${guests}`,
        `Total: ${formatINR(roomTotal)}`,
        '',
      );
    }
    if (tour) {
      lines.push(
        'TOUR PACKAGE',
        `Package: ${tour.name}`,
        `Duration: ${tour.duration}`,
        `Travellers: ${travellers}`,
        `Total: ${formatINR(tourTotal)}`,
      );
      if (tourDate) lines.push(`Travel date: ${tourDate}`);
      lines.push('');
    }
    if (jProduct) {
      const unitPrice = parsePrice(jProduct.price ?? jProduct.priceFrom);
      const mrpPrice = parsePrice(jProduct.mrp ?? '');
      lines.push(
        'JEWELLERY ENQUIRY',
        `Product: ${jProduct.name}`,
        `Collection: ${jProduct.collection}`,
        `Type: ${jProduct.category}`,
        `Material: ${jProduct.material}`,
        `Quantity: ${jQty}`,
        `Unit Price: ${formatINR(unitPrice)}`,
      );
      if (mrpPrice > unitPrice) {
        lines.push(
          `MRP: ${formatINR(mrpPrice)} — Save ${formatINR(
            mrpPrice - unitPrice,
          )} per piece`,
        );
      }
      lines.push(
        `Subtotal: ${formatINR(unitPrice * jQty)} (${jQty} × ${formatINR(
          unitPrice,
        )})`,
        `Product link: ${SITE_URL}/jewellery`,
      );
      if (jProduct.description) {
        lines.push(`Details: ${jProduct.description}`);
      }
      lines.push('');
    }
    if (hProduct) {
      lines.push(
        'HANDICRAFT',
        `Product: ${hProduct.name}`,
        `Craft: ${hProduct.craft}`,
        `Material: ${hProduct.material}`,
        `Price from: ${hProduct.priceFrom} × ${hQty}`,
        `Total: ${formatINR(hTotal)}`,
        '',
      );
    }
    lines.push(`ESTIMATED TOTAL: ${formatINR(grandTotal)}`, '');
    lines.push(`Preferred arrival / contact time: ${arrival}`);
    if (requests.trim()) lines.push(`Special requests: ${requests.trim()}`);
    lines.push(
      '',
      isBookingFlow
        ? 'Please confirm availability and share the secure payment link. Thank you!'
        : 'Please confirm availability and let us know the next steps. Thank you!',
      '',
      'Sabitri Enterprises | Grand Road, Puri, Odisha',
    );
    return lines;
  };

  const message = summaryLines().join('\n');
  const whatsappHref = buildWhatsAppLink(message);
  const emailHref = buildMailtoLink({
    subject: 'Booking / Enquiry Request — Sabitri Enterprises',
    body: message,
  });

  const sendWhatsApp = () => {
    window.open(whatsappHref, '_blank');
    setSent(true);
  };

  const sendEmail = () => {
    window.location.href = emailHref;
    setSent(true);
  };

  const SectionBadge = ({ show }: { show: boolean }) =>
    show ? <span className={styles.sectionBadge}>Selected ✓</span> : null;

  const paymentMethods = [
    {
      icon: <Smartphone size={22} />,
      title: 'UPI — GPay, PhonePe, Paytm, BHIM',
      desc: 'Instant and secure. No extra charges.',
    },
    {
      icon: <Landmark size={22} />,
      title: 'Bank Transfer (NEFT / IMPS)',
      desc: 'Best for group stays and tour packages.',
    },
    {
      icon: <Wallet size={22} />,
      title: 'Pay on Arrival',
      desc: 'Cash or card at the homestay front desk.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.stepper}>
          {stepLabels.map((label, idx) => {
            const active = idx === step;
            const done = idx < step;
            return (
              <button
                key={label}
                type="button"
                className={styles.step}
                onClick={() => idx < step && setStep(idx)}
                disabled={idx > step}
              >
                <span
                  className={`${styles.stepDot} ${active ? styles.stepDotActive : ''} ${
                    done ? styles.stepDotDone : ''
                  }`}
                >
                  {done ? <Check size={14} /> : idx + 1}
                </span>
                <span className={styles.stepLabel}>{label}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.layout}>
          <div className={styles.main}>
            {step === 0 && (
              <div className={styles.stepPanel}>
                <div className={styles.stepHeading}>
                  <span className={styles.stepCaption}>Step 1</span>
                  <h2 className={styles.stepTitle}>
                    Choose What You Need
                  </h2>
                  <p className={styles.stepDesc}>
                    Book a room, plan a tour, and pick jewellery or handicrafts
                    — any combination, all in one request. Select an item to
                    see its full details.
                  </p>
                </div>

                <div className={styles.divisionSection} ref={stayRef} id="stay">
                  <div className={styles.sectionHead}>
                    <span className={styles.sectionIcon}>
                      <BedDouble size={20} />
                    </span>
                    <div className={styles.sectionHeadText}>
                      <h3 className={styles.sectionTitle}>
                        Stay at Sabitri Homestay
                      </h3>
                      <p className={styles.sectionDesc}>
                        Choose a room, set your dates, and tell us how many
                        guests.
                      </p>
                    </div>
                    <SectionBadge show={roomPicked} />
                  </div>

                  <div className={styles.roomGrid}>
                    {rooms.map((r) => {
                      const selected = r.slug === roomSlug;
                      return (
                        <button
                          key={r.slug}
                          type="button"
                          onClick={() =>
                            setRoomSlug((prev) =>
                              prev === r.slug ? null : r.slug,
                            )
                          }
                          className={`${styles.roomCard} ${
                            selected ? styles.roomCardSelected : ''
                          }`}
                        >
                          <div className={styles.roomImageWrap}>
                            <img
                              src={r.image}
                              alt={r.name}
                              className={styles.roomImage}
                            />
                            <span className={styles.roomStatus}>{r.status}</span>
                            {selected && (
                              <span className={styles.roomCheck}>
                                <Check size={16} />
                              </span>
                            )}
                          </div>
                          <div className={styles.roomBody}>
                            <h4 className={styles.roomName}>{r.name}</h4>
                            <p className={styles.roomMeta}>
                              <Users size={13} />
                              {r.capacity} guests · {r.size}
                            </p>
                            <p className={styles.roomPriceLine}>
                              <span className={styles.roomPrice}>{r.price}</span>
                              <span className={styles.roomPer}>/ night</span>
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {room && (
                    <RoomDetail
                      room={room}
                      onClose={() => setRoomSlug(null)}
                    />
                  )}

                  <div className={styles.datesCard}>
                    <div className={styles.datesRow}>
                      <label className={styles.field}>
                        <span className={styles.fieldLabel}>
                          <CalendarDays size={14} />
                          Check-in
                        </span>
                        <input
                          type="date"
                          className={styles.input}
                          value={checkIn}
                          min={today}
                          onChange={(e) => setCheckIn(e.target.value)}
                        />
                      </label>
                      <label className={styles.field}>
                        <span className={styles.fieldLabel}>
                          <CalendarDays size={14} />
                          Check-out
                        </span>
                        <input
                          type="date"
                          className={styles.input}
                          value={checkOut}
                          min={checkIn || today}
                          onChange={(e) => setCheckOut(e.target.value)}
                        />
                      </label>
                      <label className={styles.field}>
                        <span className={styles.fieldLabel}>
                          <Users size={14} />
                          Guests
                        </span>
                        <div className={styles.guestStepper}>
                          <button
                            type="button"
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                          >
                            <Minus size={14} />
                          </button>
                          <span className={styles.guestCount}>{guests}</span>
                          <button
                            type="button"
                            onClick={() =>
                              setGuests(
                                Math.min(
                                  room ? room.capacity : 5,
                                  guests + 1,
                                ),
                              )
                            }
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </label>
                    </div>
                    {nights >= 1 ? (
                      <p className={styles.nightsLine}>
                        <BedDouble size={15} />
                        {nights} night{nights > 1 ? 's' : ''} ·{' '}
                        {formatINR(roomTotal)}
                      </p>
                    ) : (
                      <p className={styles.nightsHint}>
                        Select a check-in and a later check-out date to add the
                        room to your request.
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.divisionSection} ref={tourRef} id="tours">
                  <div className={styles.sectionHead}>
                    <span className={styles.sectionIcon}>
                      <Map size={20} />
                    </span>
                    <div className={styles.sectionHeadText}>
                      <h3 className={styles.sectionTitle}>
                        Book an Odisha Tour
                      </h3>
                      <p className={styles.sectionDesc}>
                        Pick a package and tell us how many travellers.
                      </p>
                    </div>
                    <SectionBadge show={Boolean(tour)} />
                  </div>

                  <div className={styles.tourList}>
                    {tourPackages.map((t) => {
                      const selected = t.slug === tourSlug;
                      return (
                        <button
                          key={t.slug}
                          type="button"
                          onClick={() =>
                            setTourSlug((prev) =>
                              prev === t.slug ? null : t.slug,
                            )
                          }
                          className={`${styles.tourRow} ${
                            selected ? styles.tourRowSelected : ''
                          }`}
                        >
                          <span
                            className={`${styles.tourRadio} ${
                              selected ? styles.tourRadioOn : ''
                            }`}
                          >
                            {selected && <Check size={12} />}
                          </span>
                          <span className={styles.tourInfo}>
                            <strong className={styles.tourName}>{t.name}</strong>
                            <small className={styles.tourDuration}>
                              <Clock size={12} />
                              {t.duration}
                            </small>
                          </span>
                          <span className={styles.tourPrice}>{t.price}</span>
                        </button>
                      );
                    })}
                  </div>

                  {tour && (
                    <TourDetail
                      tour={tour}
                      onClose={() => setTourSlug(null)}
                    />
                  )}

                  {tour && (
                    <div className={styles.travellerRow}>
                      <div className={styles.travellerInfo}>
                        <span className={styles.fieldLabel}>
                          <Users size={14} />
                          Travellers
                        </span>
                        <p className={styles.travellerHint}>
                          {tour.price} · {formatINR(tourTotal)} total
                        </p>
                      </div>
                      <div className={styles.guestStepper}>
                        <button
                          type="button"
                          onClick={() =>
                            setTravellers(Math.max(1, travellers - 1))
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.guestCount}>{travellers}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setTravellers(Math.min(12, travellers + 1))
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  )}

                  {tour && (
                    <div className={styles.datesCard}>
                      <label className={styles.field}>
                        <span className={styles.fieldLabel}>
                          <CalendarDays size={14} />
                          Preferred travel date (optional)
                        </span>
                        <input
                          type="date"
                          className={styles.input}
                          value={tourDate}
                          min={today}
                          onChange={(e) => setTourDate(e.target.value)}
                        />
                      </label>
                    </div>
                  )}
                </div>

                <div
                  className={styles.divisionSection}
                  ref={jewelleryRef}
                  id="jewellery"
                >
                  <div className={styles.sectionHead}>
                    <span className={styles.sectionIcon}>
                      <Gem size={20} />
                    </span>
                    <div className={styles.sectionHeadText}>
                      <h3 className={styles.sectionTitle}>
                        Enquire About Jewellery
                      </h3>
                      <p className={styles.sectionDesc}>
                        Pick a piece, set the quantity — we&apos;ll quote the
                        exact price.
                      </p>
                    </div>
                    <SectionBadge show={Boolean(jProduct)} />
                  </div>

                  <div className={styles.productGrid}>
                    {jewelleryProducts.map((p) => {
                      const selected = p.slug === jProductSlug;
                      return (
                        <button
                          key={p.slug}
                          type="button"
                          onClick={() =>
                            setJProductSlug((prev) =>
                              prev === p.slug ? null : p.slug,
                            )
                          }
                          className={`${styles.productCard} ${
                            selected ? styles.productCardSelected : ''
                          }`}
                        >
                          <div className={styles.productImageWrap}>
                            <img
                              src={p.image}
                              alt={p.name}
                              className={styles.productImage}
                            />
                            {selected && (
                              <span className={styles.roomCheck}>
                                <Check size={16} />
                              </span>
                            )}
                          </div>
                          <div className={styles.productBody}>
                            <span className={styles.productCategory}>
                              {p.category}
                            </span>
                            <h4 className={styles.productName}>{p.name}</h4>
                            <p className={styles.productMaterial}>
                              {p.material}
                            </p>
                            <span className={styles.productPrice}>
                              From {p.priceFrom}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {jProduct && (
                    <ProductDetail
                      product={jProduct}
                      originLabel="Collection"
                      origin={jProduct.collection}
                      onClose={() => setJProductSlug(null)}
                    />
                  )}

                  {jProduct && (
                    <div className={styles.quantityRow}>
                      <div className={styles.travellerInfo}>
                        <span className={styles.fieldLabel}>
                          <Users size={14} />
                          Quantity
                        </span>
                        <p className={styles.travellerHint}>
                          {jProduct.priceFrom} each · {formatINR(jTotal)}{' '}
                          estimated
                        </p>
                      </div>
                      <div className={styles.guestStepper}>
                        <button
                          type="button"
                          onClick={() => setJQty(Math.max(1, jQty - 1))}
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.guestCount}>{jQty}</span>
                        <button
                          type="button"
                          onClick={() => setJQty(Math.min(50, jQty + 1))}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.divisionSection} ref={craftRef} id="crafts">
                  <div className={styles.sectionHead}>
                    <span className={styles.sectionIcon}>
                      <Brush size={20} />
                    </span>
                    <div className={styles.sectionHeadText}>
                      <h3 className={styles.sectionTitle}>
                        Enquire About Handicrafts
                      </h3>
                      <p className={styles.sectionDesc}>
                        Pick a craft, set the quantity — we&apos;ll quote the
                        exact price and shipping.
                      </p>
                    </div>
                    <SectionBadge show={Boolean(hProduct)} />
                  </div>

                  <div className={styles.productGrid}>
                    {handicraftProducts.map((p) => {
                      const selected = p.slug === hProductSlug;
                      return (
                        <button
                          key={p.slug}
                          type="button"
                          onClick={() =>
                            setHProductSlug((prev) =>
                              prev === p.slug ? null : p.slug,
                            )
                          }
                          className={`${styles.productCard} ${
                            selected ? styles.productCardSelected : ''
                          }`}
                        >
                          <div className={styles.productImageWrap}>
                            <img
                              src={p.image}
                              alt={p.name}
                              className={styles.productImage}
                            />
                            {selected && (
                              <span className={styles.roomCheck}>
                                <Check size={16} />
                              </span>
                            )}
                          </div>
                          <div className={styles.productBody}>
                            <span className={styles.productCategory}>
                              {p.category}
                            </span>
                            <h4 className={styles.productName}>{p.name}</h4>
                            <p className={styles.productMaterial}>
                              {p.material}
                            </p>
                            <span className={styles.productPrice}>
                              From {p.priceFrom}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {hProduct && (
                    <ProductDetail
                      product={hProduct}
                      originLabel="Craft"
                      origin={hProduct.craft}
                      onClose={() => setHProductSlug(null)}
                    />
                  )}

                  {hProduct && (
                    <div className={styles.quantityRow}>
                      <div className={styles.travellerInfo}>
                        <span className={styles.fieldLabel}>
                          <Users size={14} />
                          Quantity
                        </span>
                        <p className={styles.travellerHint}>
                          {hProduct.priceFrom} each · {formatINR(hTotal)}{' '}
                          estimated
                        </p>
                      </div>
                      <div className={styles.guestStepper}>
                        <button
                          type="button"
                          onClick={() => setHQty(Math.max(1, hQty - 1))}
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.guestCount}>{hQty}</span>
                        <button
                          type="button"
                          onClick={() => setHQty(Math.min(50, hQty + 1))}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className={styles.stepPanel}>
                <div className={styles.stepHeading}>
                  <span className={styles.stepCaption}>Step 2</span>
                  <h2 className={styles.stepTitle}>Your Details</h2>
                  <p className={styles.stepDesc}>
                    Your WhatsApp number is all we need — add an email if you
                    prefer a written confirmation.
                  </p>
                </div>

                <div className={styles.formGrid}>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Full name *</span>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Phone / WhatsApp *</span>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="+91 …"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>
                      Email (optional)
                    </span>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>
                      <Clock size={14} />
                      Preferred arrival / contact time
                    </span>
                    <select
                      className={styles.input}
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                    >
                      {arrivalOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={`${styles.field} ${styles.fieldFull}`}>
                    <span className={styles.fieldLabel}>Special requests</span>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      rows={4}
                      placeholder="Home-cooked meals, airport pickup, temple darshan help, sizing, gift wrapping, delivery address …"
                      value={requests}
                      onChange={(e) => setRequests(e.target.value)}
                    />
                  </label>
                </div>

                <label className={styles.agree}>
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <span>
                    I agree to the{' '}
                    <a href="/policies/booking-policy">Booking Policy</a>,{' '}
                    <a href="/policies/cancellation-policy">
                      Cancellation Policy
                    </a>{' '}
                    and{' '}
                    <a href="/policies/privacy-policy">Privacy Policy</a>.
                  </span>
                </label>
              </div>
            )}

            {step === 2 && (
              <div className={styles.stepPanel}>
                <div className={styles.stepHeading}>
                  <span className={styles.stepCaption}>Step 3</span>
                  <h2 className={styles.stepTitle}>Review & Confirm</h2>
                  <p className={styles.stepDesc}>
                    Please review your request. Everything looks right? Continue
                    to payment to send it to our family team.
                  </p>
                </div>

                <div className={styles.reviewCard}>
                  <div className={styles.reviewGroup}>
                    <h4 className={styles.reviewGroupTitle}>
                      <MapPin size={16} />
                      Your Selection
                    </h4>
                    {selectedItems.length > 0 ? (
                      <div className={styles.reviewList}>
                        {selectedItems.map((item) => (
                          <div key={item.title + item.name} className={styles.reviewItem}>
                            <img
                              src={item.image}
                              alt={item.name}
                              className={styles.reviewImage}
                            />
                            <div className={styles.reviewItemBody}>
                              <span className={styles.reviewItemTag}>
                                {item.title}
                              </span>
                              <strong>{item.name}</strong>
                              <span>{item.meta}</span>
                            </div>
                            <span className={styles.reviewPrice}>
                              {formatINR(item.total)}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className={styles.reviewEmpty}>
                        Nothing selected yet. Go back to Step 1.
                      </p>
                    )}
                  </div>

                  <div className={styles.reviewGroup}>
                    <h4 className={styles.reviewGroupTitle}>Your Details</h4>
                    <div className={styles.reviewContact}>
                      <p>
                        <strong>{name}</strong> · {phone}
                      </p>
                      <p>{email}</p>
                      <p>
                        Preferred arrival / contact time: {arrival}
                        {requests.trim() && ` · ${requests.trim()}`}
                      </p>
                    </div>
                  </div>

                  <div className={styles.reviewTotal}>
                    <span>Estimated total</span>
                    <strong>{formatINR(grandTotal)}</strong>
                  </div>
                  <p className={styles.reviewNote}>
                    Product prices are indicative (from) — final quotes depend
                    on current rates, customisation, and shipping. Room and
                    tour totals may be adjusted for festival periods. Our team
                    confirms everything before any payment.
                  </p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.stepPanel}>
                <div className={styles.stepHeading}>
                  <span className={styles.stepCaption}>Step 4</span>
                  <h2 className={styles.stepTitle}>Payment & Finalisation</h2>
                  <p className={styles.stepDesc}>
                    We don&apos;t collect payments on this site. Review how you
                    can pay, then send your request — our family team confirms
                    availability and shares a secure payment link.
                  </p>
                </div>

                <div className={styles.payCard}>
                  <div className={styles.payNow}>
                    <span className={styles.payNowLabel}>Total to pay</span>
                    <strong className={styles.payNowAmount}>
                      {formatINR(grandTotal)}
                    </strong>
                    <span className={styles.payNowHint}>
                      Estimated — you pay only after we confirm availability.
                      A small advance holds your booking.
                    </span>
                  </div>

                  <h4 className={styles.payCardTitle}>
                    <CreditCard size={16} />
                    How you can pay
                  </h4>
                  <div className={styles.payMethods}>
                    {paymentMethods.map((m) => (
                      <div key={m.title} className={styles.payMethod}>
                        <span className={styles.payIcon}>{m.icon}</span>
                        <div className={styles.payMethodBody}>
                          <strong>{m.title}</strong>
                          <span>{m.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.payTrust}>
                    <ShieldCheck size={18} />
                    <span>
                      You pay only after we confirm availability and share a
                      verified payment link. Never share UPI PINs or OTPs.
                    </span>
                  </div>

                  <p className={styles.payNote}>
                    Product prices are indicative (from). Room and tour totals
                    may be adjusted for festival periods. Final quote is
                    confirmed by our team before any payment.
                  </p>

                  {sent ? (
                    <div className={styles.success}>
                      <span className={styles.successIcon}>
                        <PartyPopper size={28} />
                      </span>
                      <h3 className={styles.successTitle}>
                        Request ready to send!
                      </h3>
                      <p className={styles.successText}>
                        Your details are in your WhatsApp or email app — just
                        hit send. Our family team will confirm availability and
                        share a secure payment link within a few hours.
                      </p>
                      <p className={styles.successRef}>
                        Can&apos;t find the app? Use the buttons below again.
                      </p>
                      <div className={styles.reviewActions}>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.sendBtn} ${styles.whatsappBtn}`}
                        >
                          <MessageCircle size={18} />
                          Open WhatsApp
                        </a>
                        <a
                          href={emailHref}
                          className={`${styles.sendBtn} ${styles.emailBtn}`}
                        >
                          <Mail size={18} />
                          Open Email
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.reviewActions}>
                      <button
                        type="button"
                        onClick={sendWhatsApp}
                        className={`${styles.sendBtn} ${styles.whatsappBtn}`}
                      >
                        <MessageCircle size={18} />
                        Confirm & get payment link
                      </button>
                      <button
                        type="button"
                        onClick={sendEmail}
                        className={`${styles.sendBtn} ${styles.emailBtn}`}
                      >
                        <Mail size={18} />
                        Confirm via Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={goBack}
                disabled={step === 0}
              >
                <ArrowLeft size={16} />
                Back
              </button>
              {step < stepLabels.length - 1 && (
                <button
                  type="button"
                  className={styles.nextBtn}
                  onClick={goNext}
                  disabled={!canNext}
                >
                  {nextLabel}
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>

          <aside className={styles.summary}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Your Request</h3>

              {selectedItems.length > 0 ? (
                <div className={styles.summaryItems}>
                  {selectedItems.map((item) => (
                    <div key={item.title + item.name} className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>{item.title}</span>
                      <div className={styles.summaryValue}>
                        <strong>{item.name}</strong>
                        <small>{item.meta}</small>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Selection</span>
                  <span className={styles.summaryMuted}>
                    Make a selection
                  </span>
                </div>
              )}

              <div className={styles.summaryDivider} />

              <div className={styles.summaryTotal}>
                <span>Estimated total</span>
                <strong>{formatINR(grandTotal)}</strong>
              </div>
              <p className={styles.summaryNote}>
                No payment is taken on this site. We confirm every request
                personally before any advance is collected.
              </p>

              <div className={styles.summaryTrust}>
                <span>
                  <Check size={14} />
                  Direct from the family
                </span>
                <span>
                  <Check size={14} />
                  Fair, transparent pricing
                </span>
                <span>
                  <Check size={14} />
                  Confirmed within hours
                </span>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.summaryBar}>
          <div className={styles.summaryBarInner}>
            <div className={styles.summaryBarStatus}>
              <span className={styles.summaryBarStep}>
                {stepLabels[step]}
              </span>
              <span className={styles.summaryBarCount}>
                {selectedItems.length} item
                {selectedItems.length === 1 ? '' : 's'}
              </span>
            </div>
            <div className={styles.summaryBarItems}>
              {selectedItems.length > 0 ? (
                selectedItems.map((item) => (
                  <span
                    key={item.title + item.name}
                    className={styles.summaryBarItem}
                  >
                    {item.title} · {item.name}
                  </span>
                ))
              ) : (
                <span className={styles.summaryBarEmpty}>
                  No selection yet — pick a room, tour, or craft
                </span>
              )}
            </div>
            <div className={styles.summaryBarAction}>
              <div className={styles.summaryBarTotal}>
                <span>Estimated total</span>
                <strong>{formatINR(grandTotal)}</strong>
              </div>
              {step < stepLabels.length - 1 && (
                <button
                  type="button"
                  className={styles.summaryBarCta}
                  onClick={goNext}
                  disabled={!canNext}
                >
                  {barCtaLabel}
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
