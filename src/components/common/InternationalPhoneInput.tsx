import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  usePhoneInput,
  defaultCountries,
  parseCountry,
  FlagImage,
} from 'react-international-phone';
import 'react-international-phone/style.css';
import { ChevronDown, Search, Check } from 'lucide-react';

export interface InternationalPhoneInputProps {
  value: string;
  onChange: (phone: string, meta: { isValid: boolean; countryIso2: string; dialCode: string }) => void;
  error?: string;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
}

// Preferred countries to show at the top of the list
const PREFERRED_COUNTRY_CODES = ['in', 'us', 'gb', 'ae'];

export const InternationalPhoneInput: React.FC<InternationalPhoneInputProps> = ({
  value,
  onChange,
  error,
  disabled = false,
  id = 'phone',
  placeholder = 'Enter phone number',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Initialize react-international-phone hook with India (+91) as default
  const {
    inputValue,
    country,
    setCountry,
    handlePhoneValueChange,
    inputRef,
  } = usePhoneInput({
    defaultCountry: 'in',
    value: value || '',
    countries: defaultCountries,
    onChange: ({ phone: newPhone, country: currentCountry }) => {
      const digitsOnly = newPhone.replace(/\D/g, '');
      const dialCodeDigits = currentCountry.dialCode.replace(/\D/g, '');
      const hasSubscriberDigits = digitsOnly.length > dialCodeDigits.length;

      const isValid =
        !hasSubscriberDigits ||
        (digitsOnly.length >= dialCodeDigits.length + 6 && digitsOnly.length <= 15);

      const normalizedPhone = hasSubscriberDigits ? newPhone : '';
      onChange(normalizedPhone, {
        isValid,
        countryIso2: currentCountry.iso2,
        dialCode: currentCountry.dialCode,
      });
    },
  });

  // Parse and memoize full country list from library
  const allParsedCountries = useMemo(() => {
    return defaultCountries.map((c) => parseCountry(c));
  }, []);

  // Filter countries by search query
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return allParsedCountries;
    }
    const cleanQuery = q.startsWith('+') ? q.slice(1) : q;
    return allParsedCountries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(cleanQuery) ||
        c.iso2.toLowerCase().includes(q)
    );
  }, [allParsedCountries, searchQuery]);

  // Preferred and standard country slices
  const { preferredList, otherList } = useMemo(() => {
    if (searchQuery.trim()) {
      return { preferredList: [], otherList: filteredCountries };
    }
    const preferred = allParsedCountries.filter((c) =>
      PREFERRED_COUNTRY_CODES.includes(c.iso2)
    );
    const others = allParsedCountries.filter(
      (c) => !PREFERRED_COUNTRY_CODES.includes(c.iso2)
    );
    return { preferredList: preferred, otherList: others };
  }, [allParsedCountries, filteredCountries, searchQuery]);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Handle country selection
  const handleSelectCountry = (iso2: string) => {
    setCountry(iso2);
    setIsOpen(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef} onKeyDown={handleKeyDown}>
      {/* Input Outer Container */}
      <div
        className={`relative flex items-center w-full h-[48px] rounded-xl bg-[#08080A] border text-xs sm:text-sm text-white transition-all duration-200 ${
          error
            ? 'border-red-500 ring-1 ring-red-500/50'
            : isFocused || isOpen
            ? 'border-scuba-orchid shadow-[0_0_12px_rgba(113,1,147,0.35)]'
            : 'border-[#242428] hover:border-[#3D3D45]'
        } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        {/* Country Selector Button */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={`Select country. Currently selected: ${country.name} (+${country.dialCode})`}
          disabled={disabled}
          className="h-full px-2.5 sm:px-3.5 flex items-center space-x-1.5 sm:space-x-2 border-r border-[#242428] hover:bg-[#141418] rounded-l-xl transition-colors cursor-pointer select-none focus:outline-none flex-shrink-0"
        >
          {/* Flag */}
          <div className="w-5 h-3.5 flex items-center justify-center overflow-hidden rounded-sm shadow-sm flex-shrink-0">
            <FlagImage
              iso2={country.iso2}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Calling Code beside Flag */}
          <span className="text-xs font-semibold text-white/90 font-mono tracking-tight">
            +{country.dialCode}
          </span>

          {/* Chevron Arrow */}
          <ChevronDown
            className={`w-3.5 h-3.5 text-scuba-muted transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-scuba-orchid' : ''
            }`}
          />
        </button>

        {/* Masked International Phone Input */}
        <input
          ref={inputRef}
          type="tel"
          id={id}
          name="phone"
          value={inputValue}
          onChange={handlePhoneValueChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full h-full px-3 sm:px-4 bg-transparent text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none font-sora font-medium"
        />
      </div>

      {/* Searchable Country Selector Dropdown - Max width capped to prevent mobile blowout */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Country list"
          className="absolute top-full mt-2 left-0 z-50 w-full max-w-[calc(100vw-2rem)] sm:w-80 max-h-80 bg-[#0E0E10] border border-[#2A2A30] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fadeIn backdrop-blur-xl"
        >
          {/* Search Header */}
          <div className="p-3 border-b border-[#242428] bg-[#121216]">
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 text-scuba-muted absolute left-3 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code (+91, UK...)"
                aria-label="Search country"
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#08080A] border border-[#242428] text-xs text-white placeholder-scuba-muted focus:outline-none focus:border-scuba-orchid font-sora transition-colors"
              />
            </div>
          </div>

          {/* Country Options List */}
          <div className="overflow-y-auto max-h-60 divide-y divide-[#18181D] scrollbar-thin scrollbar-thumb-scuba-violet/40">
            {preferredList.length > 0 && (
              <>
                <div className="px-3 py-1.5 text-[10px] font-semibold text-scuba-orchid uppercase tracking-widest bg-[#100918] font-mono">
                  Popular Destinations
                </div>
                {preferredList.map((c) => {
                  const isSelected = c.iso2 === country.iso2;
                  return (
                    <button
                      key={`preferred-${c.iso2}`}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectCountry(c.iso2)}
                      className={`w-full px-3.5 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer text-xs min-h-[44px] ${
                        isSelected
                          ? 'bg-scuba-violet/25 text-white font-semibold'
                          : 'hover:bg-[#1A1A22] text-[#E6E6E6]'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 truncate mr-2">
                        <div className="w-4 h-3 flex items-center justify-center overflow-hidden rounded-sm flex-shrink-0">
                          <FlagImage
                            iso2={c.iso2}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="truncate">{c.name}</span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <span className="font-mono text-xs text-scuba-orchid font-medium">
                          +{c.dialCode}
                        </span>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-scuba-orchid" />
                        )}
                      </div>
                    </button>
                  );
                })}
                <div className="px-3 py-1.5 text-[10px] font-semibold text-scuba-muted uppercase tracking-widest bg-[#0A0A0C] font-mono">
                  All Countries
                </div>
              </>
            )}

            {otherList.length > 0 ? (
              otherList.map((c) => {
                const isSelected = c.iso2 === country.iso2;
                return (
                  <button
                    key={c.iso2}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectCountry(c.iso2)}
                    className={`w-full px-3.5 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer text-xs min-h-[44px] ${
                      isSelected
                        ? 'bg-scuba-violet/25 text-white font-semibold'
                        : 'hover:bg-[#1A1A22] text-[#E6E6E6]'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 truncate mr-2">
                      <div className="w-4 h-3 flex items-center justify-center overflow-hidden rounded-sm flex-shrink-0">
                        <FlagImage
                          iso2={c.iso2}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="truncate">{c.name}</span>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <span className="font-mono text-xs text-scuba-orchid font-medium">
                        +{c.dialCode}
                      </span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-scuba-orchid" />
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-6 text-center text-xs text-scuba-muted">
                No matching country found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
