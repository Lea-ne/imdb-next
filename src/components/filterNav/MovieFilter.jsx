import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import GenreFilter from "./GenderFilter"

export default function MovieFilter() {
  return (
    <div>
        <div>
        {/* filter by genre */}
        <Popover>
            <PopoverTrigger>Genre</PopoverTrigger>
            <PopoverContent>
                <GenreFilter />
            </PopoverContent>
        </Popover>

        {/* filter by country */}
            <Popover>
                <PopoverTrigger>Pays</PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>

        {/* filter by date */}
            <Popover>
                <PopoverTrigger>Date</PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>

        {/* filter by grade */}
            <Popover>
                <PopoverTrigger>Note</PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
        </div>
    </div>
  )
}
